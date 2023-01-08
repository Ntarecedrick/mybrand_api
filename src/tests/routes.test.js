import request from 'supertest';
import app from '../index';
import Blog from '../models/Blog'
import { dataImage } from './values';
import dotenv from 'dotenv';
import Message from '../models/Message'
import User from "../models/user"

dotenv.config()
const AuthToken=process.env.AUTH
// test For Blog 

test('should get all blogs', async () => {
    const blogs = await request(app).get("/api/blogs");

    expect(blogs.statusCode).toBe(200)
})

test('should get blog likes', async () => {
    const blog = await Blog.findOne();

    const id = blog._id

    const blogs = await request(app).get(`/api/blogs/${id}/likes`);

    expect(blogs.statusCode).toBe(200)
});


test('should get a single blog', async () => {
    const blog = await Blog.findOne();

    const id = blog._id
    const blogs = await request(app).get(`/api/blogs/${id}`);

    expect(blogs.statusCode).toBe(200)
})

test('should get a single comment', async () => {
    const blog = await Blog.findOne();

    const id = blog._id
    const blogs = await request(app).get(`/api/blogs/${id}/comments`);

    expect(blogs.statusCode).toBe(200)
})
test('should post a blog', async () => {

    const blogs = await request(app).post(`/api/blogs`).set('Authorization', AuthToken).send({
        title: "a new test for blog",
        content: "we are just testing a route for posting",
        image: dataImage
    })
    expect(blogs.statusCode).toBe(200)
});

test('should update a blog', async () => {
    const blog = await Blog.findOne();
    const id = blog._id
    const blogs = await request(app).put(`/api/blogs/${id}`).set('Authorization' , AuthToken).send({
        title: "a new test for blog",
        content: "we are just testing a route for posting",
        image: dataImage
    })
    expect(blogs.statusCode).toBe(200)
});

test('should delete a blogs', async ()=>{
    const blog = await Blog.findOne();
    const id = blog._id
    const blogs = await request(app).delete(`/api/blogs/${id}`).set('Authorization' , AuthToken);

    expect(blogs.statusCode).toBe(204)
})

test('should post a comment', async () => {
    const blog = await Blog.findOne();

    const id = blog._id
    const blogs = await request(app).post(`/api/blogs/${id}/comments`).set('Authorization' , AuthToken).send({
        message: "hello dear test"
    })
    expect(blogs.statusCode).toBe(200);
})

test('should Post blog likes', async () => {
    const blog = await Blog.findOne();
    const id = blog._id
    const blogs = await request(app).post(`/api/blogs/${id}/likes`).set(
        'Authorization' , AuthToken
    ).send();

    expect(blogs.statusCode).toBe(200)
})

// test for User

let randonNumber= Math.floor(Math.random() * 100000)
test ('register user', async ()=>{
    const user= await request(app).post('/user/register').send({
        name: "andela program",
        email: `andela${randonNumber}@program.com`,
        password: "andela123"
    });

    expect(user.statusCode).toBe(200)
})

test('user login', async ()=>{
    const user= await request(app).post('/user/login').send({
        email: "ntarecedrick250@gmail.com",
        password: "ntare250"
    });

    expect(user.statusCode).toBe(200)
})

// message Test

test('should Send a Message', async () => {0
    const message = await request(app).post("/api/messages")
    .send({
        name: "test jest",
        email: "jest@test.com",
        message: "i am just testing"
    });
    expect(message.statusCode).toBe(200) ;
});



test('should get all message', async ()=>{
    const message = await request(app).get(`/api/messages/`).set('Authorization' , AuthToken);
    expect(message.statusCode).toBe(200)
});
test('should get a message', async ()=>{
    const messages= await Message.findOne();
    const id= messages._id
    const message = await request(app).get(`/api/messages/${id}`).set('Authorization' , AuthToken);
    expect(message.statusCode).toBe(200)
})

// test likes and comments
