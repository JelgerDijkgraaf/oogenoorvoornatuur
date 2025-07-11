import { GlobalConfig } from 'payload/types';

export const Home: GlobalConfig = {
    slug: 'home-texts',
    label: 'Home Texts',
    fields: [
        {
            type: 'group',
            name: 'hero',
            label: 'Hero Sectie',
            fields: [
                { name: 'title', type: 'text', label: 'Titel' },
                { name: 'subtitle', type: 'text', label: 'Subtitel' },
                { name: 'button', type: 'text', label: 'Call-to-action Knop'},
            ],
        },
        {
            type: 'group',
            name: 'intro',
            label: 'Intro Section',
            fields: [
                { name: 'introTitle', type: 'text' },
                { name: 'introBody', type: 'textarea' },
            ],
        },
    ],
};
