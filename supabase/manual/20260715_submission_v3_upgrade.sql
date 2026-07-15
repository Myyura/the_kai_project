-- Destructive upgrade to the signed v3 submission protocol.
-- Run this migration before deploying the updated content-submissions function.

begin;

-- v3 reconstructs new-solution Markdown from the visible, signed Issue blocks
-- and does not accept v2 Issues. The project confirmed there is no submission
-- history to preserve.
delete from public.content_submissions;

alter table public.content_submissions
  drop column if exists correction_markdown;

alter table public.content_submissions
  add column if not exists correction_base_sha text not null default '',
  add column if not exists correction_patch jsonb not null default '[]'::jsonb,
  add column if not exists correction_conflict boolean not null default false;

alter table public.content_submissions
  drop constraint if exists content_submissions_patch_is_array,
  drop constraint if exists content_submissions_correction_sha,
  drop constraint if exists content_submissions_new_solution_markdown_length;

alter table public.content_submissions
  add constraint content_submissions_patch_is_array
    check (jsonb_typeof(correction_patch) = 'array'),
  add constraint content_submissions_correction_sha
    check (
      submission_type <> 'correction'
      or correction_base_sha ~ '^[a-f0-9]{40}$'
    ),
  add constraint content_submissions_new_solution_markdown_length
    check (
      submission_type <> 'new_solution'
      or char_length(description_markdown) + char_length(kai_markdown) <= 50000
    );

commit;
