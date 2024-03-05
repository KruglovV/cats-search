const express = require('express');
const bodyParser = require('body-parser');
const Cat = require('./Cat');
const Dog = require('dogs-search/Dog');
require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/dogs', async (req, res) => {
    try {
        const dog = new Dog(req.body);
        await dog.save();
        res.status(201).send(dog);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/dogs', async (req, res) => {
    try {
        const dogs = await Dog.find({});
        res.send(dogs);
    } catch (error) {
        res.status(500).send();
    }
});

app.patch('/dogs/:id', async (req, res) => {
    try {
        const dog = await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!dog) {
            return res.status(404).send();
        }
        res.send(dog);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/dogs/:id', async (req, res) => {
    try {
        const dog = await Dog.findByIdAndDelete(req.params.id);
        if (!dog) {
            return res.status(404).send();
        }
        res.send(dog);
    } catch (error) {
        res.status(500).send();
    }
});


app.post('/cats', async (req, res) => {
    try {
        const cat = new Cat(req.body);
        await cat.save();
        res.status(201).send(cat);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/cats', async (req, res) => {
    try {
        const cats = await Cat.find({});
        res.send(cats);
    } catch (error) {
        res.status(500).send();
    }
});

app.patch('/cats/:id', async (req, res) => {
    try {
        const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!cat) {
            return res.status(404).send();
        }
        res.send(dog);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/cats/:id', async (req, res) => {
    try {
        const cat = await Cat.findByIdAndDelete(req.params.id);
        if (!cat) {
            return res.status(404).send();
        }
        res.send(cat);
    } catch (error) {
        res.status(500).send();
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
