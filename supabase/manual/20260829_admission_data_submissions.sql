-- Add authenticated admission-data review submissions to the signed Issue inbox.
-- Admission data remains in review_created and is never auto-converted to a PR.

begin;

alter table public.content_submissions
  add column if not exists admission_data jsonb not null default '{}'::jsonb;

alter table public.content_submissions
  drop constraint if exists content_submissions_type_check,
  drop constraint if exists content_submissions_status_check,
  drop constraint if exists content_submissions_year_check,
  drop constraint if exists content_submissions_admission_data_is_object,
  drop constraint if exists content_submissions_admission_data_presence,
  drop constraint if exists content_submissions_admission_not_converted;

alter table public.content_submissions
  add constraint content_submissions_type_check
    check (submission_type in ('new_solution', 'correction', 'admission_data')),
  add constraint content_submissions_status_check
    check (status in ('pending_issue', 'issue_created', 'review_created', 'failed', 'converted', 'closed')),
  add constraint content_submissions_year_check
    check (year is null or (year >= 1900 and year <= 2200)),
  add constraint content_submissions_admission_data_is_object
    check (jsonb_typeof(admission_data) = 'object'),
  add constraint content_submissions_admission_data_presence
    check (
      (submission_type = 'admission_data' and admission_data <> '{}'::jsonb)
      or (submission_type <> 'admission_data' and admission_data = '{}'::jsonb)
    ),
  add constraint content_submissions_admission_not_converted
    check (submission_type <> 'admission_data' or status <> 'converted');

commit;
