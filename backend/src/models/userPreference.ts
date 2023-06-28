import mongoose, { Schema, Document } from 'mongoose';

export interface IUserPreference extends Document {
  username: string;
  colorpreference: string;
}

const UserPreferenceSchema: Schema<IUserPreference> = new Schema({
  username: {
    type: String,
    required: true,
  },
  colorpreference: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IUserPreference>('UserPreference', UserPreferenceSchema);
