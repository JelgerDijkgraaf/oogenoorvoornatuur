import createClient from 'openapi-fetch';
import { PUBLIC_CMS_URL } from '$env/static/public'

export const client = createClient({ baseUrl: PUBLIC_CMS_URL });