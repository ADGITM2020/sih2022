const app = require('./app');
const cors = require("cors");
const { Server } = require("socket.io");
const connectDatabase = require('./config/database');
const dotenv = require("dotenv");

//connecting to database
connectDatabase();

app.use(cors());

//config
dotenv.config({path:"backend/config/config.env"});

const server = app.listen(process.env.PORT, () => { 
    console.log(`Server is running on port: ${process.env.PORT}`);
})

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    })

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    })

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    })
})