const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true
    },
    departmentName:{
        type: String,
        require: true
    },
})

userSchema.pre('save', async function (next) {
    const book = this;
    

    next();
})

mongoose.model("Book", userSchema);