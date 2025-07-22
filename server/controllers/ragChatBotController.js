import { ragChatbot } from "../services/ragChatbot.js";

const ragQueryCall = async (req, res) => {
    try {
        const { history, query } = req.body;
        const data = await ragChatbot(query, history);
        res.status(200).json({ message: data });
    } catch (error) {
        res
            .status(400)
            .json(`Error handeling Query for ${req.params.userId}: ${error.message}`);
    }
};

export default ragQueryCall;    