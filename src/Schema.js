const heroSchema = {
    'title': 'hero schema',
    'version': 0,
    'description': 'describes a simple hero',
    'type': 'object',
    'properties': {
        'name': {
            'type': 'string',
            'primary': true
        },
        'color': {
            'type': 'string'
        }
    },
    'required': ['color']
};

export default heroSchema;
