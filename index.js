const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, I am form node js and express.')
})

const users = [
    {
        id: 0,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        "phone": "1-770-736-8031",
    },
    {
        id: 1,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593",
    },
    {
        id: 2,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
    },
    {
        id: 3,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623",
    },
    {
        id: 4,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
    },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // user query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }

})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send("inside post")
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api for single user
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:`, port)
})