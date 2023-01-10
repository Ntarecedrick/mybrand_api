import Blog from '../models/Blog'

const deleteBlog= async (req, res) => {
    try {
        await Blog.deleteOne({ _id: req.params.id })
       return res.status(204).send('Blog is deleted');
    } catch {
      return  res.status(404).send({ error: "Blog doesn't exist!" });
    }
}

export default deleteBlog