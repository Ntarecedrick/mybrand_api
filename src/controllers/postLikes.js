import ValidateLikes from '../validation/likesValidation'
import Blog from '../models/Blog'
let postLikes = async (req, res) => {

    try {
        const blog = await Blog.findOne({ _id: req.params.id });
        let BooleanValue
        let updatedLikes
        if (!blog.likes.userValue) {
             BooleanValue = true
             updatedLikes = blog.likes.userLike + 1
            await Blog.findOneAndUpdate({ _id: req.params.id }, {
                likes: {
                    userLike: updatedLikes,
                    userValue: BooleanValue
                }
            });

        } else {
            if (blog.likes.userLike <= 0) {
                 BooleanValue = false
                 updatedLikes = blog.likes.userLike - 1
                await Blog.findOneAndUpdate({ _id: req.params.id }, {
                    likes: {
                        userLike: updatedLikes,
                        userValue: BooleanValue
                    }
                });
            } else {
                 BooleanValue = false
                 updatedLikes = blog.likes.userLike - 1
                await Blog.findOneAndUpdate({ _id: req.params.id }, {
                    likes: {
                        userLike: updatedLikes,
                        userValue: BooleanValue
                    }
                });
            }

        }
        const newBlog = await Blog.findOne({ _id: req.params.id });
        return res.status(200).send(newBlog.likes)
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default postLikes