import Message from "../models/Message";

const getOneMessage= async (req, res) => {
    try {
        const message = await Message.findOne({ _id: req.params.id });
       return  res.send(message)
    } catch(error) {
        res.status(404)
       return res.send(error)
    }



}


export default getOneMessage