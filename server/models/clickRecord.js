import mongoose from 'mongoose';

const clickRecordSchema = new mongoose.Schema(
  {
    deviceType: String,
    ip: String, // server-observed IP
    clientIp: String, // client-reported public IP
    browserName: String,
    browserVersion: String,
    osName: String,
    osVersion: String,
    platformType: String,
  },
  { timestamps: true }
);

export default mongoose.model('clickRecords', clickRecordSchema);