import mongoose from 'mongoose';

const analyticsRecordSchema = new mongoose.Schema({
  clickMeter: Number,
  siteViews: Number,
},
{timestamps: true});

export default mongoose.model('analytics', analyticsRecordSchema);