//instance of express
const express = require("express");
const cors = require("cors");
//server create
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const dbConnect = require("./config/database");
dbConnect();

//middlewares
app.use(express.json());
// app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)
const newsfeedRoutes = require("./routes/newsfeeds");

//mount
app.use("/api/v1",newsfeedRoutes);

//start server at given port
app.listen(PORT,()=>{
    console.log(`server successfully started at ${PORT}`);
});


//import databse function

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});