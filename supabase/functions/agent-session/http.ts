import {createHttpHelpers} from '../_shared/http.ts';

export {getBearerToken, readJsonBody} from '../_shared/http.ts';

export const {isAllowedOrigin, withCors, jsonResponse, errorResponse} = createHttpHelpers({
  allowedOriginsEnv: 'AGENT_ALLOWED_ORIGINS',
  methods: 'GET, POST, OPTIONS',
});
