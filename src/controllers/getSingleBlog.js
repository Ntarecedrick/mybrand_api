import Blog from '../models/Blog';

let getSingleBlog=  async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id })
       return res.send(blog)
    } catch {
       return res.status(404).send({ error: "Blog doesn't exist!" })
    }
}

export default getSingleBlog