require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/buku", require("./routes/bukuRoutes"));
app.use("/api/peminjaman", require("./routes/peminjamanRoutes"));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});