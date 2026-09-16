import {createHttpHelpers} from '../_shared/http.ts';

export {getBearerToken, readJsonBody} from '../_shared/http.ts';

export const {corsHeadersFor, isAllowedOrigin, withCors, jsonResponse, errorResponse} = createHttpHelpers({
  allowedOriginsEnv: 'DEVELOPER_API_ALLOWED_ORIGINS',
  methods: 'GET, POST, DELETE, OPTIONS',
});
