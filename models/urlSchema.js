import mongoose, { Schema } from "mongoose";

const uslSchema = new Schema(
  {
    long_url: {
      url: String,
      type: String,
      require: true,
    },
    short_url: {
      url: String,
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", uslSchema);
export { Url };
