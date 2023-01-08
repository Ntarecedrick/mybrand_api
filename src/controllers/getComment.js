import Blog from '../models/Blog';

const getSingleComment= async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id });
       return res.status(200).send(blog.comments);
    } catch {
     return res.status(404).send({ error: "Blog doesn't exist!" })
    }
}

export default getSingleComment