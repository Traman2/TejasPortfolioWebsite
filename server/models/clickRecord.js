import mongoose from 'mongoose';

const clickRecordSchema = new mongoose.Schema({
  deviceType: String,
  ip: String,
},
{timestamps: true});

export default mongoose.model('clickRecords', clickRecordSchema);