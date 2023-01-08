import Blog from '../models/Blog'

const deleteBlog= async (req, res) => {
    try {
        await Blog.deleteOne({ _id: req.params.id })
       return res.status(204).send('Blog is deleted');
    } catch {
        res.status(404);
      return  res.send({ error: "Blog doesn't exist!" });
    }
}

export default deleteBlog