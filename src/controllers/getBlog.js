import Blog from '../models/Blog';

const blog = async (req, res) => {
   try {
    const blogs = await Blog.find();

    return res.send(blogs).status(200)
   } catch (error) {
    return res.send(error)
   }
}



export default blog


