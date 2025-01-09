
let items = [];

// Create
app.post('/user', (req, res) => {
    const body = req.body;
    console.log(body, JWT_KEY);
    jwt.sign(body, JWT_KEY, {expiresIn: 100} , (err, token)=> {
        if(err) {
            res.status(500)
        } else {
            res.status(201).send({
                token: token,
                message: 'User created successfully',
                user: body
            });
        }
    })
});

// Read
app.get('/getUser', (req, res) => {
    const token = req.headers.authorization;
    console.log(token, "headers");
    
    jwt.verify(token, JWT_KEY, (err, data)=>{
        if(err) {
            res.status(401).send({
                message: 'Unauthorized'
            });
        } else {
            res.status(200).send({
                message: 'User fetched successfully',
                user: data
            });
        }
    })
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
