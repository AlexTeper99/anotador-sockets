import mongoose, { Schema, Document } from "mongoose";

interface Item {
  name: string;
  quantity: number;
}

interface Anottator extends Document {
  id: string;
  items: Item[];
}

const anottatorSchema: Schema = new Schema<Anottator>({
  id: {
    type: String,
    required: true,
    match: /^[0-9]{3}[a-zA-Z]{3}$/,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
});

const AnottatorModel = mongoose.model<Anottator>("Anottator", anottatorSchema);

export default AnottatorModel;
