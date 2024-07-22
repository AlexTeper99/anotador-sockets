import mongoose, { Schema, Document } from 'mongoose';
import { ID_REGEX, Item } from '../../../domain';

interface Annotator extends Document {
  id: string;
  items: Item[];
}

const annotatorSchema: Schema = new Schema<Annotator>({
  id: {
    type: String,
    required: true,
    match: ID_REGEX,
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

export const AnnotatorModel = mongoose.model<Annotator>('Anottator', annotatorSchema);
