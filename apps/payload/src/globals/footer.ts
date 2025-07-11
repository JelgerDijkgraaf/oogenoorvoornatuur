import { GlobalConfig } from 'payload/types';

export const Footer: GlobalConfig = {
    slug: 'footer-texts',
    label: 'Footer Texts',
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'group',
            name: 'footer',
            label: 'Footer',
            fields: [
                { name: 'email', type: 'text', label: 'E-mail'},
                { name: 'coc', type: 'text', label: 'KVK'},
                { name: 'vat', type: 'text', label: 'BTW Nummer'},
            ]
        }
    ],
};
