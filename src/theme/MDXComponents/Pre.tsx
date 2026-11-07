import React, {type ReactNode} from 'react';
import type {Props} from '@theme/MDXComponents/Pre';

type StudyPreProps = Props & {
  'data-kai-study-section'?: string;
};

// CodeBlock remounts its highlighted content after hydration. Keep its study
// section on a host that survives that remount.
export default function MDXPre({
  children,
  'data-kai-study-section': studySection,
}: StudyPreProps): ReactNode {
  return (
    <div
      data-kai-code-slot=""
      data-kai-study-section={studySection}>
      {children}
    </div>
  );
}
