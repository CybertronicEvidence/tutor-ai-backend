const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        dateOfBirth: {
            type: Date,
            required: true,
            default: Date.now
        },
        dp: {
            public_id: {
                type: String
            },
            url: {
                type: String
            }
        },
        password: {
            type: String
        }
    }, { timestamps: true }
)

const User = mongoose.model('User', userSchema);

module.exports = User;