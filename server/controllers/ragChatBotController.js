import { ragChatbot } from "../services/ragChatbot.js";
import ChatBotRecord from "../models/chatbotQuery.js";

const ragQueryCall = async (req, res) => {
    try {
        const { history, query } = req.body;
        const data = await ragChatbot(query, history);
        const newQuery = new ChatBotRecord({query})
        await newQuery.save();

        res.status(200).json({ answer: data.answer, cards: data.card_enum, suggestions: data.suggested_replies });
    } catch (error) {
        res
            .status(400)
            .json(`Error handeling Query for ${req.params.userId}: ${error.message}`);
    }
};

export default ragQueryCall;    