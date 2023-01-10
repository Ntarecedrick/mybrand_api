import Blog from "../models/Blog"


export default async function updateLike(req,res){
    try {
        const blog = await Blog.findOne({_id: req.params.id})
        if(blog.likes.userValue){
            blog.likes.userValue = false
            blog.save()
        }
        return res.status(200).send(blog)
    } catch (error) {
        res.send(error)
    }
}