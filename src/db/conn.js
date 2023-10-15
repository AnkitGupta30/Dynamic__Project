const mongoose = require('mongoose');

// Create a connection to the MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/ankitdynamic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connection Success...");
}).catch((error) => {
    console.error(error);
});
