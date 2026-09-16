import {createHttpHelpers} from '../_shared/http.ts';

export {getBearerToken} from '../_shared/http.ts';

export const {corsHeaders, jsonResponse, errorResponse} = createHttpHelpers({
  methods: 'GET, OPTIONS',
});
