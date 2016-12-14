let app = require('express')();

app.get('/', (req, res) => res.json("It's working"));

app.listen(3000, () => console.log("Listening"));