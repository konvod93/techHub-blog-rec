export default {
    title: 'Normal Text',
    name: 'normalText',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong'},
                    { title: 'Emphasis', value: 'em' }
                ],
                annotations: [],
            },
        },
    ],
}