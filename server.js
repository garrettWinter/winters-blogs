const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));




// These are running just to trigger create the DBs
const { Users, Comments, Posts  } = require('./models');





app.use(routes);
sequelize.sync({force: false}).then(()=> {
    app.listen(PORT,() => console.log (`Application listening on port ${PORT}.`))
});