import Blog from '../models/Blog';
import validateBlog from '../validation/validateBlog';
import cloudinary from '../helpers/cloudinary'

let postBlog = async (req, res) => {
    const { error, value } = validateBlog(req.body)

    try {
        if (error) {
            return res.status(404).send(error.details[0].message)
        } else {
            const blog = new Blog({
                title: req.body.title,
                content: req.body.content,
                image:  req.file.path
            })
            await blog.save();
            return await res.status(200).send(blog)
        }
    } catch (err) {
        return res.status(404).send(err)
    }
}
export default postBlog