const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send("Works!");
});

app.post('/login', (req, res) => {
  const { login, erp_user } = req.body
  console.log(login);
  if (login === "erp_user" && erp_user === "12qwaszx12qwaszx")
    res.send({
      login,
      name: "Екатерина",
    });
  res.status(400).send({});
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
