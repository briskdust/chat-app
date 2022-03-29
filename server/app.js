const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "http://localhost:3000" } });

const router = require("./routers/router");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./utils/users");

dotenv.config();

app.use(cors({ origin: "http://localhost:3000" }));

const PORT = process.env.PORT || 5000;

io.on("connection", socket => {
  socket.on("join", ({ name, room }) => {
    const user = addUser(socket.id, name, room);

    socket.emit("message", {
      user: "admin",
      text: `Welcome to ${room}, ${name}!`,
    });

    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      text: `a new user ${name} has joined this room`,
    });

    socket.join(user.room);
  });

  socket.on("sendMessage", message => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left`,
      });
    }
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`listening on *: ${PORT}`);
});
