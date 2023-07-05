const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
                type: String,
                required: [true,"Please enter a valid name"],
        },
        position: {
            type: Number,
            required: false,
            default: 0,
        },
        image: {
            type: String,
            required: false,
        }

    },

    {
        timestamps: true
    }
)

const product = mongoose.model("Product",productSchema);

module.exports = product;