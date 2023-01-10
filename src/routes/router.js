import express from 'express';
import deleteBlog from '../controllers/deleteblog';
import getBlog from '../controllers/getBlog';
import getBlogLikes from '../controllers/getBlogLikes';
import getMessage from '../controllers/getMessage';
import getSingleBlog from '../controllers/getSingleBlog';
import getComment from '../controllers/getComment';
import getOneMessage from '../controllers/getSingleMessage';
import postMyBlog from '../controllers/postBlog';
import postNewComment from '../controllers/postComment';
import postNewLikes from '../controllers/postLikes';
import postMessages from '../controllers/postMessage';
import updateBlog from '../controllers/updateBlog';
import testpassport from "./passportverify";
import passport from 'passport';
import upload from "../helpers/multer"
import updateLike from '../controllers/likeUpdate';

testpassport()

const router = express.Router();

// Blogs Routes
router.get("/blogs", getBlog);
// BLOG POST 
router.post(
    "/blogs",
    passport.authenticate('jwt',
        { session: false }),
    upload.single("image"),
    postMyBlog);
// comment Post
router.post('/blogs/:id/comments', postNewComment);
// likes post 
router.post('/blogs/:id/likes', postNewLikes);
// BLOG GET 
router.get("/blogs/:id", getSingleBlog);
// get Blog Comment 
router.get('/blogs/:id/comments', getComment)
// get blog likes
router.get('/blogs/:id/likes', getBlogLikes)
// BLOGB PUT
router.put("/blogs/:id", passport.authenticate('jwt', { session: false }),upload.single("image"), updateBlog)
// BLOG DELETE 
router.delete("/blogs/:id", passport.authenticate('jwt', { session: false }), deleteBlog)
// routes for Message
// Message GET
router.get('/messages', passport.authenticate('jwt', { session: false }), getMessage);
// Message Post
router.post('/messages', postMessages);
// Get Message 
router.get('/messages/:id', passport.authenticate('jwt', { session: false }), getOneMessage)


// update Likes

router.put('/blogs/:id/likes', updateLike)

export default router