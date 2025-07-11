import { client } from '$lib/api';
import type { PageLoad } from './$types';
import { PUBLIC_CMS_URL } from '$env/static/public'
export const load: PageLoad = async ({ fetch }) => {
    try {
        console.log(PUBLIC_CMS_URL)
        const { data } = await client.GET('/api/users', { fetch });
    console.log(data)
        // Extract the user object from data
        const user = data?.user;

        return { user };
    } catch (error) {
        console.error('Failed to load user data:', error);
        return { user: null };
    }
};