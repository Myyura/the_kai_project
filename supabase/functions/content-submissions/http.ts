import {createHttpHelpers} from '../_shared/http.ts';

export {getBearerToken, readJsonBody} from '../_shared/http.ts';

export const {corsHeadersFor, isAllowedOrigin, withCors, jsonResponse, errorResponse} = createHttpHelpers({
  allowedOriginsEnv: 'CONTENT_SUBMISSIONS_ALLOWED_ORIGINS',
  methods: 'GET, POST, OPTIONS',
  extraHeaders: ['x-kai-submission-callback-secret'],
});
