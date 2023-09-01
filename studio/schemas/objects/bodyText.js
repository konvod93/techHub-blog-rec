export default {
    title: 'Post Body',
    name: 'bodyText',
    type: 'array',
    of: [
        {
            type: 'block',
            title: 'Block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
            ],
            lists: [
                {title: 'Bullet List', value: 'bullet'},
                {title: 'Numbered List', value: 'number'},
            ],
            marks: {
                decorators: [
                    {
                        title: 'Strong', 
                        value: 'strong',
                    },
                    {
                        title: 'Emphasis', 
                        value: 'em',
                    },
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',                        
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },                            
                        ],
                    },
                ],               
            },            
        },
        {
            type: 'customImage',

        },
    ],
};