import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ItemSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  value: { type: Number, required: true },
  values: { type: String, required: true },
  result: { type: Boolean, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

ItemSchema.plugin(uniqueValidator);

export default mongoose.model('Item', ItemSchema);
