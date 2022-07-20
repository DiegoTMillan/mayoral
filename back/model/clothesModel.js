const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema(
    {
        img: {
            required: true,
            type: String,
        },
        name: {
            required: true,
            type: String,
        },
        striked: {
            type: Array,
        },
        prize: {
            type: String
        },
        offerPrize: {
            type: String,
        },
        colors: {
            required: true,
            type: String,
        },
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model("clothes", clothesSchema);