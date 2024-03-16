// Create web server
// Create a route for POST /comments
// Create a route for GET /comments
// Create a route for GET /comments/:id
// Create a route for PUT /comments/:id
// Create a route for DELETE /comments/:id

const express = require('express');
const app = express();
app.use(express.json());

let comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).send(comment);
});

app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(comment => comment.id === id);
  if (comment) {
    res.status(200).send(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.put('/comments/:id', (req, res) => {
  const { id } = req.params;
  const { author, text } = req.body;
  const comment = comments.find(comment => comment.id === id);
  if (comment) {
    comment.author = author;
    comment.text = text;
    res.status(200).send(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(comment => comment.id === id);
  if (comment) {
    comments = comments.filter(comment => comment.id !== id);
    res.status(200).send(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
// 2. Test the API
// Use Postman to test the API you created.

// 3. Bonus
// Create a route for GET /comments/:id/author
// Create a route for GET /comments/:id/text
// Create a route for GET /comments/:id/author-text
// Create a route for GET /comments/:id/author/:author
// Create a route for GET /comments/:id/text/:text
// Create a route for GET /comments/: