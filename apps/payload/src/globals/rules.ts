import {GlobalConfig} from 'payload/types';

export const Rules: GlobalConfig = {
    slug: 'rules-texts',
    label: 'Regels Texts',
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'group',
            name: 'rules',
            label: 'Regels',
            fields: [
                {name: 'title', type: 'text', label: 'Titel'},
                {name: 'body', type: 'text', label: 'Tekst'},
                {
                    name: 'rules', type: 'array', label: 'Regels', fields: [
                        {name: 'rule', type: 'text', label: 'Regel'}
                    ]
                }
            ]
        }
    ],
};
