const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    next();
})


app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: 'efez5fze',
            title: 'First post title',
            content: 'First post content'
        },
        {
            id: 'trgr5gh6gt',
            title: 'Second post title',
            content: 'Second post content'
        }
    ]
    res.status(200).send({
        message: 'Post added successfuly',
        posts: posts
    });
})

module.exports = app;