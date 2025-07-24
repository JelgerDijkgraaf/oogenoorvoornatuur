import { client } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const [excursionRes, categoryRes] = await Promise.all([
            client.GET('/api/excursions', {
                fetch,
                params: {
                    query: {
                        limit: 99999,
                    }
                }
            }),
            client.GET('/api/categories', {
                fetch,
                params: {
                    query: { limit: 99999 }
                }
            })
        ]);

        return {
            excursions: excursionRes.data,
            categories: categoryRes.data
        };
    } catch (error) {
        console.error('Failed to load data', error);
        return { excursions: [], categories: [] };
    }
};
