#!/usr/bin/env python3
"""
Knowledge Point Tag Extractor for The Kai Project

This script extracts knowledge point tags from exam answer markdown files
using OpenRouter API (GPT-4o-mini) and updates the frontmatter tags field.

Requirements:
- openai
- python-frontmatter
- pyyaml

Environment Variables:
- OPENROUTER_API_KEY: API key for OpenRouter
- CHANGED_FILES: Newline-separated list of changed file paths (optional)
"""

import os
import sys
import json
import time
import re
from pathlib import Path
from typing import List, Dict, Optional, Set
import frontmatter
from openai import OpenAI

# Configuration
OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"
OPENROUTER_MODEL = "openai/gpt-4.1-mini"
OPENAI_MODEL = "gpt-5-mini"  # Fallback model for OpenAI API
MAX_RETRIES = 5
RETRY_DELAY = 3  # seconds
REQUEST_TIMEOUT = 30  # seconds
MAX_CONTENT_LENGTH = 8000  # characters to send to API


class TagExtractor:
    """Extract knowledge point tags from markdown content using LLM."""
    
    def __init__(self, api_key: str, use_openrouter: bool = True):
        """Initialize the tag extractor with API key.
        
        Args:
            api_key: API key for OpenRouter or OpenAI
            use_openrouter: If True, use OpenRouter API; otherwise use OpenAI API
        """
        if not api_key:
            raise ValueError("API key is required")
        
        self.use_openrouter = use_openrouter
        
        if use_openrouter:
            self.client = OpenAI(
                base_url=OPENROUTER_BASE_URL,
                api_key=api_key,
            )
            self.model = OPENROUTER_MODEL
            print("✓ Using OpenRouter API")
        else:
            self.client = OpenAI(
                api_key=api_key,
            )
            self.model = OPENAI_MODEL
            print("✓ Using OpenAI API")
        
        self.processed_count = 0
        self.error_count = 0
    
    def extract_tags(self, content: str, file_path: str) -> List[str]:
        """
        Extract knowledge point tags from markdown content.
        
        Args:
            content: The markdown content (excluding frontmatter)
            file_path: Path to the file (for logging)
        
        Returns:
            List of extracted tags in English
        """
        # Truncate content if too long
        if len(content) > MAX_CONTENT_LENGTH:
            content = content[:MAX_CONTENT_LENGTH] + "\n\n[Content truncated...]"
        
        prompt = f"""You are an expert in computer science and mathematics education. Analyze the following exam answer content and extract 3-5 key knowledge point tags in English.

Requirements:
- Tags MUST be in English only
- Use PascalCase with hyphens format (e.g., "Dynamic-Programming", "Finite-Automata", "Linear-Algebra")
- Focus on specific technical concepts, algorithms, theories, or mathematical topics
- Prioritize concrete topics over general categories
- Return ONLY a valid JSON array of strings, nothing else

Answer content:
{content}

Output format (JSON array only):
["Tag1", "Tag2", "Tag3"]"""

        for attempt in range(MAX_RETRIES):
            try:
                response = self.client.chat.completions.create(
                    model=self.model,
                    messages=[
                        {"role": "system", "content": "You are a knowledge point extraction assistant. Always respond with valid JSON arrays only."},
                        {"role": "user", "content": prompt}
                    ],
                    temperature=0.3,
                    max_tokens=200,
                    timeout=REQUEST_TIMEOUT,
                )
                
                result = response.choices[0].message.content.strip()
                
                # Parse JSON response
                tags = json.loads(result)
                
                if not isinstance(tags, list):
                    raise ValueError("Response is not a JSON array")
                
                # Validate and clean tags
                cleaned_tags = []
                for tag in tags:
                    if isinstance(tag, str) and tag.strip():
                        # Ensure proper format
                        cleaned_tag = tag.strip()
                        # Remove any non-English characters or invalid formats
                        if re.match(r'^[A-Za-z0-9\-]+$', cleaned_tag):
                            cleaned_tags.append(cleaned_tag)
                
                if cleaned_tags:
                    print(f"  ✓ Extracted {len(cleaned_tags)} tags: {', '.join(cleaned_tags)}")
                    return cleaned_tags
                else:
                    print(f"  ⚠ No valid tags extracted from response: {result}")
                    return []
                
            except json.JSONDecodeError as e:
                print(f"  ⚠ Attempt {attempt + 1}/{MAX_RETRIES}: Invalid JSON response: {e}")
                if attempt < MAX_RETRIES - 1:
                    time.sleep(RETRY_DELAY)
                else:
                    print(f"  ✗ Failed to parse JSON after {MAX_RETRIES} attempts")
                    return []
            
            except Exception as e:
                print(f"  ⚠ Attempt {attempt + 1}/{MAX_RETRIES}: API error: {e}")
                if attempt < MAX_RETRIES - 1:
                    time.sleep(RETRY_DELAY)
                else:
                    print(f"  ✗ Failed after {MAX_RETRIES} attempts")
                    self.error_count += 1
                    return []
        
        return []
    
    def process_file(self, file_path: Path) -> bool:
        """
        Process a single markdown file to extract and update tags.
        
        Args:
            file_path: Path to the markdown file
        
        Returns:
            True if file was modified, False otherwise
        """
        print(f"\n📄 Processing: {file_path}")
        
        try:
            # Read and parse frontmatter
            with open(file_path, 'r', encoding='utf-8') as f:
                post = frontmatter.load(f)
            
            # Get existing tags
            existing_tags = post.get('tags', [])
            if not isinstance(existing_tags, list):
                existing_tags = [existing_tags] if existing_tags else []
            
            # Convert to set for deduplication (case-sensitive)
            existing_tags_set = set(existing_tags)
            
            print(f"  Existing tags: {existing_tags if existing_tags else 'None'}")
            
            # Extract content (excluding frontmatter)
            content = post.content
            
            if not content.strip():
                print(f"  ⚠ Skipping: Empty content")
                return False
            
            # Extract new tags using LLM
            new_tags = self.extract_tags(content, str(file_path))
            
            if not new_tags:
                print(f"  ⚠ No new tags extracted")
                return False
            
            # Merge tags: keep existing + add new (deduplicate)
            merged_tags = list(existing_tags)  # Preserve order of existing tags
            added_count = 0
            
            for tag in new_tags:
                if tag not in existing_tags_set:
                    merged_tags.append(tag)
                    existing_tags_set.add(tag)
                    added_count += 1
            
            if added_count == 0:
                print(f"  ℹ All extracted tags already exist")
                return False
            
            # Update frontmatter
            post['tags'] = merged_tags
            
            # Write back to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(frontmatter.dumps(post))
            
            print(f"  ✓ Added {added_count} new tags: {', '.join([t for t in new_tags if t not in existing_tags])}")
            print(f"  Final tags: {merged_tags}")
            
            self.processed_count += 1
            return True
            
        except Exception as e:
            print(f"  ✗ Error processing file: {e}")
            self.error_count += 1
            return False


def get_changed_files() -> List[Path]:
    """
    Get list of changed markdown files from environment variable or stdin.
    
    Returns:
        List of Path objects for changed .md/.mdx files
    """
    changed_files_str = os.environ.get('CHANGED_FILES', '').strip()
    
    if not changed_files_str:
        print("ℹ No CHANGED_FILES environment variable found")
        return []
    
    files = []
    for line in changed_files_str.split('\n'):
        line = line.strip()
        if line and (line.endswith('.md') or line.endswith('.mdx')):
            file_path = Path(line)
            if file_path.exists() and file_path.is_file():
                files.append(file_path)
    
    return files


def main():
    """Main entry point."""
    print("=" * 60)
    print("Knowledge Point Tag Extractor for The Kai Project")
    print("=" * 60)
    
    # Get API key from environment (try OpenRouter first, then OpenAI)
    openrouter_key = os.environ.get('OPENROUTER_API_KEY')
    openai_key = os.environ.get('OPENAI_API_KEY')
    
    if openrouter_key:
        api_key = openrouter_key
        use_openrouter = True
        print("✓ OpenRouter API key loaded")
    elif openai_key:
        api_key = openai_key
        use_openrouter = False
        print("✓ OpenAI API key loaded (fallback)")
    else:
        print("✗ Error: Neither OPENROUTER_API_KEY nor OPENAI_API_KEY environment variable is set")
        sys.exit(1)
    
    # Get changed files
    changed_files = get_changed_files()
    
    if not changed_files:
        print("\nℹ No changed markdown files to process")
        print("=" * 60)
        sys.exit(0)
    
    print(f"\n📋 Found {len(changed_files)} changed file(s) to process")
    
    # Initialize extractor
    extractor = TagExtractor(api_key, use_openrouter=use_openrouter)
    
    # Process each file
    modified_count = 0
    for file_path in changed_files:
        if extractor.process_file(file_path):
            modified_count += 1
        
        # Small delay to avoid rate limiting
        time.sleep(0.5)
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 Summary:")
    print(f"  Total files processed: {len(changed_files)}")
    print(f"  Files modified: {modified_count}")
    print(f"  Errors: {extractor.error_count}")
    print("=" * 60)
    
    if extractor.error_count > 0:
        print("⚠ Some files had errors, but the process continued")
        sys.exit(0)  # Don't fail the workflow
    else:
        print("✓ All files processed successfully")
        sys.exit(0)


if __name__ == "__main__":
    main()
