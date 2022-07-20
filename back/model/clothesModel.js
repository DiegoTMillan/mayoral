const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema(
    {
        img: {
            type: String,
        },
        name: {
            required: true,
            type: String,
        },
        strikedPrize: {
            type: String,
        },
        prize: {
            type: String
        },
        salePrize: {
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