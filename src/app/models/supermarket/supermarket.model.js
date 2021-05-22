module.exports = mongoose => {
    return mongoose.model(
        "supermarket",
        mongoose.Schema(
            {
                identifier: {type: String, trim: true, unique: true, required: true},
                name: {type: String, trim: true, unique: true, required: true},
                url: {type: String, trim: true, unique: true, required: true},
                active: Boolean
            },
            {timestamps: true}
        )
    );
};