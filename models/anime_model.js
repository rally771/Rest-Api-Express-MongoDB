const mongoose = require('mongoose');

const dataSchemaAnime = new mongoose.Schema({
    animeName: {
        required: true,
        type: String
    },
    animeCharacter: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('AnimeData', dataSchemaAnime)
