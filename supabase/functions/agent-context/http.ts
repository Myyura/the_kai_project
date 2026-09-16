import {createHttpHelpers} from '../_shared/http.ts';

export {getBearerToken, readJsonBody} from '../_shared/http.ts';

export const {corsHeaders: defaultCorsHeaders, jsonResponse, errorResponse} = createHttpHelpers({
  methods: 'GET, POST, OPTIONS',
  extraHeaders: ['x-kai-agent-session'],
});
