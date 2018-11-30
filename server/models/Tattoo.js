const keystone = require('keystone');
const Types = keystone.Field.Types;
const path = require('path');

const Tattoo = new keystone.List('Tattoo', {
    autokey: { path: 'slug', from: 'name', unique: true },
    defaultSort: '-createdAt'
});

const tattooImgStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: keystone.expandPath('server/public/img'),
        generateFilename: function(file, index) {
            return file.originalname;
        },
        whenExists: 'error',
        publicPath: '/public/img'
    }
});

Tattoo.add({
    name: {
        type: String,
        required: true
    },
    customerName: String,
    category: String,
    state: {
        type: Types.Select,
        options: 'draft, published, archived',
        default: 'draft'
    },
    author: {
        type: Types.Relationship,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    publishedAt: Date,
    image: {
        type: Types.File,
        storage: tattooImgStorage,
        mimetype: '.jpeg, .jpg, .png'
    },
    description: {
        type: Types.Textarea,
        height: 300
    }
});

Tattoo.defaultColumns = 'name, state|20%, author, publishedAt|15%';
Tattoo.register();