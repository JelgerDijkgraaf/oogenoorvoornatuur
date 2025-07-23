import type {CollectionConfig} from 'payload'

export const Excursions: CollectionConfig = {
    slug: 'excursions',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'titel',
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
            label: 'Beschrijving'
        },
        {
            name: 'image',
            type: 'upload',
            label: 'Foto',
            relationTo: 'media'
        },
        {
            name: 'price',
            type: 'number',
            label: 'Prijs',
            required: true,
        },
        {
          name: 'location',
          type: 'group',
            label: 'Locatie',
          fields: [
              {
                  name: 'name',
                  label: 'Naam',
                  type: 'text',
                  required: true,
              },
              {
                  name: 'latitude',
                  label: 'Breedtegraad',
                  type: 'number',
              },
              {
                  name: 'longitude',
                  label: 'Lengtegraad',
                  type: 'number',
              }
          ]
        },
        {
            name: 'minGuests',
            type: 'number',
            label: 'Minimaal aantal leden',
            min: 0,
            admin: {
                step: 1,
            }
        },
        {
            name: 'maxGuests',
            type: 'number',
            label: 'Maximaal aantal leden',
            min: 0,
            admin: {
                step: 1,
            },
            validate: (value: number | null | undefined, { siblingData }: { siblingData: { minGuests?: number } }) =>
                value != null && siblingData?.minGuests != null && value <= siblingData.minGuests
                    ? 'Maximaal aantal leden moet groter zijn dan minimaal aantal leden'
                    : true

        },
        {
            name: 'category',
            type: 'relationship',
            relationTo: 'categories',
        },
        {
            name: 'dates',
            type: 'array',
            label: 'Data',
            fields: [
                {
                    name: 'startDate',
                    type: 'date',
                    label: 'Begin datum + tijd',
                    admin: {
                        date: {
                            pickerAppearance: 'dayAndTime',
                        }
                    }
                },
                {
                    name: 'endDate',
                    type: 'date',
                    label: 'Eind datum + tijd',
                    admin: {
                        date: {
                            pickerAppearance: 'dayAndTime',
                        }
                    }
                }
            ]
        },
    ],
}
