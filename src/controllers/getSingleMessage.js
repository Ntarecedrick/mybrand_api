import Message from "../models/Message";

const getOneMessage= async (req, res) => {
    try {
        const message = await Message.findOne({ _id: req.params.id });
       return  res.send(message)
    } catch(error) {
       return res.status(404).send(error)
    }



}


export default getOneMessage