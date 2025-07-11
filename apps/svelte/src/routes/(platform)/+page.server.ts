import { client } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    const { data } = await client.GET('/api/globals/home-texts', { fetch });
    return {
        texts: data,
    };
};
