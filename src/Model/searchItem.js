import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const Schema = mongoose.Schema;

const searchItemSchema = new Schema({
  name: { type: String, required: true, trim: true, unique: true },
  symbol: { type: String, required: true, trim: true, unique: true },
});

searchItemSchema.plugin(mongoosePaginate);

export default mongoose.model("SearchItem", searchItemSchema);
