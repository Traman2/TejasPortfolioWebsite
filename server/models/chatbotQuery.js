import mongoose from 'mongoose';

const chatbotSchema = new mongoose.Schema({
  query: String,
},
{timestamps: true});

export default mongoose.model('chatbot', chatbotSchema);