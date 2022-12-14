const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")


// view engine setup -- 
const hbs = require('express-handlebars');

// view engine setup
app.set('view engine', 'hbs');

app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/pages/',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

// importing routes - 
const adminRoutes = require("./routes/adminRoutes.js")
const visitorRoutes = require("./routes/visitorRoutes.js")
app.use("/", visitorRoutes)
app.use("/admin", adminRoutes);


// importing db and connection function -
const connectDB = require("./db/connection.js")
connectDB();



app.listen(8000, () => {
    console.log("Server is running at port 8000.");
})
// / Adding admin to the db --

// const blogModel = require("./models/blogModel.js")
// const rgnjvk = async () => {
//     const data = await blogModel.find({})
//     for (let i = 0; i < data.length; i++) {
//         console.log(
//             data[i]._id
//         );
//     }
// }

// rgnjvk()
