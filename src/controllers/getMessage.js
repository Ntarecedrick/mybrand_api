import Message from "../models/Message";

const getMessage = async (req, res) => {
    try {
        const messages = await Message.find();
        res.send(messages)
    } catch (error) {
        return res.send(error)
    }
}

export default getMessage