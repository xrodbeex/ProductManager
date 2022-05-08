const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a aconnection to the database"))
    .catch(err => console.log("Something went wrong when connect to the database", err));