const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
const config=require('../config/config');

const bannerSchema = new mongoose.Schema(
{
    first_name: {
        type: String,
        trim: true,
    },
    last_name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
    },
    banner_image: {
        type: String,
        trim: true,
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    },
    {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: function (doc, data) {
            if (data?.banner_image) {
            data.banner_image = `${config.base_url}banner_image/${data.banner_image}`;
            }
        },
    },
    }
);

// bannerSchema.pre("save", async function (next) {
//   var salt = bcrypt.genSaltSync(8);
//   this.password = await bcrypt.hash(this.password, salt);
// });

const Banner = mongoose.model("banners", bannerSchema);
module.exports = Banner;
