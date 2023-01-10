import Blog from '../models/Blog'
import validateBlog from '../validation/validateBlog';
import cloudinary from '../helpers/cloudinary';

const updateBlog = async (req, res) => {

  const { error, value } = validateBlog(req.body)

  if (error) {
    return res.status(400).send(error.details.map((e) => {
      return e.message
    }))
  } else {
    try {
      const { title, content } = req.body

      const blogNew = {

        title, content, image: req.file.path
      }
      await Blog.findOneAndUpdate({
        _id: req.params.id,
      },
        {
          title: blogNew.title,
          content: blogNew.content,
          image: blogNew.image
        }
      );
      return res.status(200).send(blogNew)
    } catch {
      return res.status(404).send({ error: "blog doesn't exist!" })
    }
  }
}

export default updateBlog