import Blog from '../models/Blog';

const getBlogLikes= async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id });
     return   res.status(200).send(blog);
    } catch {
       return res.status(404).send({ error: "Blog doesn't exist!" })
    }
}

export default getBlogLikes