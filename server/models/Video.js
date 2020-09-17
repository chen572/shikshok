const { Schema, model } = require("mongoose");

const VideoSchema = new Schema({
  videoUrl: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  bundle: { type: Boolean, required: false },
  bundlePrice: { type: Number, required: false },
});

const Video = model("Video", VideoSchema);
module.exports = Video;
