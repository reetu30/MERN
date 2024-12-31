import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(bodyParser.json());

let items = [];

// Create
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
});

// Read
app.get('/items', (req, res) => {
    res.send(items);
});

// Update
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    items = items.map(item => item.id === id ? updatedItem : item);
    res.send(updatedItem);
});

// Delete
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    items = items.filter(item => item.id !== id);
    res.status(204).send();
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});