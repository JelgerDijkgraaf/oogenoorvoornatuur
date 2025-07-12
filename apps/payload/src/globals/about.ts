import { GlobalConfig } from 'payload/types';

export const About: GlobalConfig = {
    slug: 'about-texts',
    label: 'About Texts',
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'group',
            name: 'about',
            label: 'About',
            fields: [
                { name: 'title', type: 'text', label: 'Titel'},
                { name: 'body', type: 'text', label: 'Tekst'},
            ]
        }
    ],
};
