#!/bin/bash
# End-to-end test script for the auto-tag workflow

set -e

echo "=========================================="
echo "Auto-Tag Workflow End-to-End Test"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "scripts/tag_extractor.py" ]; then
    echo "❌ Error: Please run this script from the repository root"
    exit 1
fi

# Check for API key
if [ -z "$OPENAI_API_KEY" ] && [ -z "$OPENROUTER_API_KEY" ]; then
    echo "❌ Error: Neither OPENAI_API_KEY nor OPENROUTER_API_KEY is set"
    exit 1
fi

echo "✓ Environment check passed"
echo ""

# Simulate detecting changed files (use git diff)
echo "Step 1: Detecting changed markdown files..."
CHANGED_FILES=$(git diff --name-only HEAD~1 HEAD -- 'docs/**/*.md' 'docs/**/*.mdx' || echo "")

if [ -z "$CHANGED_FILES" ]; then
    echo "ℹ No markdown files changed"
    exit 0
fi

echo "Changed files:"
echo "$CHANGED_FILES"
echo ""

# Export for Python script
export CHANGED_FILES

# Run the tag extraction script
echo "Step 2: Running tag extraction script..."
python3 scripts/tag_extractor.py

# Check if any files were modified
echo ""
echo "Step 3: Checking for changes..."
if git diff --quiet docs/; then
    echo "ℹ No changes to commit"
else
    echo "✓ Changes detected in docs/"
    echo ""
    echo "Modified files:"
    git diff --name-only docs/
    echo ""
    echo "Sample diff:"
    git diff docs/ | head -30
fi

echo ""
echo "=========================================="
echo "Test completed successfully!"
echo "=========================================="
