import mongoose from 'mongoose';

const clickRecordSchema = new mongoose.Schema({
  deviceType: String,
},
{timestamps: true});

export default mongoose.model('clickRecords', clickRecordSchema);