import { GlobalConfig } from 'payload/types';

export const Home: GlobalConfig = {
    slug: 'home-texts',
    label: 'Home Texts',
    access: {
        read: () => true,
    },
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
            label: 'Intro Sectie',
            fields: [
                { name: 'title', type: 'text', label: 'Titel' },
                { name: 'body', type: 'textarea', label: 'Tekst' },
                { name: 'button', type: 'text', label: 'Call-to-action Knop'},
            ],
        },
    ],
};
