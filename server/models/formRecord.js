import mongoose from 'mongoose';

const formRecordSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

export default mongoose.model('formRecords', formRecordSchema);