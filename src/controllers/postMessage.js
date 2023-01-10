import { stat } from "@babel/core/lib/gensync-utils/fs";
import Message from "../models/Message";
import validateMessage from "../validation/validateMessage";

const postMessages=  async (req, res) => {
  try {
    const { error, value } = validateMessage(req.body);

    if (error) {
        return res.status(400).send(error.details[0])
    } else {
        const message = new Message({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        })
        await message.save();
        return res.status(200).send(message)
    }
  } catch (error) {
    return res.status(400).send(error)
  }

}

export default postMessages