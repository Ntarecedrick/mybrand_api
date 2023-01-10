import request from 'supertest';
import app from '../index';
import Blog from '../models/Blog'
import dotenv from 'dotenv';
import Message from '../models/Message'

dotenv.config()
const AuthToken=process.env.AUTH
// test For Blog 

test('should get all blogs', async () => {
    const blogs = await request(app).get("/blogs");

    expect(blogs.statusCode).toBe(200)
})

test('should get blog likes', async () => {
    const blog = await Blog.findOne();
    console.log(blog)
    const id = blog._id

    const blogs = await request(app).get(`/blogs/${id}/likes`);

    expect(blogs.statusCode).toBe(200)
});



test('should get a single blog', async () => {
    const blog = await Blog.findOne();

    const id = blog._id
    const blogs = await request(app).get(`/blogs/${id}`);

    expect(blogs.statusCode).toBe(200)
})

test('should get a single comment', async () => {
    const blog = await Blog.findOne();

    const id = blog._id
    const blogs = await request(app).get(`/blogs/${id}/comments`);

    expect(blogs.statusCode).toBe(200)
})

test('should post a comment', async () => {
    const blog = await Blog.findOne();

    const id = blog._id
    const blogs = await request(app).post(`/blogs/${id}/comments`).send({
        email: "ntarecedrick250@gmail.com",
        message: "hello dear test"
    })
    expect(blogs.statusCode).toBe(200);
})

test('should Post blog likes', async () => {
    const blog = await Blog.findOne();
    const id = blog._id
    if (!blog.likes.userValue) {
        const BooleanValue = true
        const updatedLikes = blog.likes.userLike + 1
        await Blog.findOneAndUpdate({
            likes: {
                userLike: updatedLikes,
                userValue: BooleanValue
            }
        });

    } else {
        if (blog.likes.userLike <= 0) {
            const BooleanValue = false
            const updatedLikes = blog.likes.userLike - 1
            await Blog.findOneAndUpdate({
                likes: {
                    userLike: updatedLikes,
                    userValue: BooleanValue
                }
            });
        } else {
            const BooleanValue = false
            const updatedLikes = blog.likes.userLike - 1
            await Blog.findOneAndUpdate( {
                likes: {
                    userLike: updatedLikes,
                    userValue: BooleanValue
                }
            });
        }

    }
    const blogs = await request(app).post(`/blogs/${id}/likes`).send();

    expect(blogs.statusCode).toBe(200)
})

// test for User

let randonNumber= Math.floor(Math.random() * 100000)
test ('register user', async ()=>{
    const user= await request(app).post('/signup').send({
        name: "andela program",
        email: `andela${randonNumber}@program.com`,
        password: "andela123"
    });

    expect(user.statusCode).toBe(200)
})

test('user login', async ()=>{
    const user= await request(app).post('/login').send({
        email: "ntarecedrick250@gmail.com",
        password: "ntare250"
    });

    expect(user.statusCode).toBe(200)
})

// message Test

test('should Send a Message', async () => {0
    const message = await request(app).post("/messages")
    .send({
        name: "test jest",
        email: "jest@test.com",
        message: "i am just testing"
    });
    expect(message.statusCode).toBe(200) ;
});



test('should get all message', async ()=>{
    const message = await request(app).get(`/messages/`).set('Authorization' , AuthToken);
    expect(message.statusCode).toBe(200)
});
test('should get a message', async ()=>{
    const messages= await Message.findOne();
    const id= messages._id
    const message = await request(app).get(`/messages/${id}`).set('Authorization' , AuthToken);
    expect(message.statusCode).toBe(200)
})

// test likes and comments


test("updating likes", async()=>{
    const blog= Blog.findOne()
    const id= blog._id
    const singleLike= await request(app).put(`/blogs/${id}/likes`).send();
    expect(singleLike.statusCode).toBe(200)
})