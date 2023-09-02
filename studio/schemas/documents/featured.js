import { MdStar } from "react-icons/md"

export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    icon: MdStar,
    fields: [
        {
            title: 'Title',
            name:'tutle',
            type: 'string',
        },
        {
            name: 'blogs',
            title: 'Featured Blogs',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'blog' }],
                },
            ],
            validation: (Rule) => [
                Rule.error('Every Item should be unique').unique(),
                Rule.required().error('at least one item is required'),
            ],
        },
        {
            name: 'categories',
            title: 'Featured Top Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'category' }],
                },
            ],
            validation: (Rule) => [
                Rule.error('Every Item should be unique').unique(),
                Rule.required().error('at least one item is required'),
            ],
        },
    ],

}