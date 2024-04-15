import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { routes } from './routes';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8080 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api", routes)

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/index.html"))
})

;(async () => {
    if (!process.env.MONGO_URL) {
        console.error('MongoDB URL not found in .env file');
        process.exit(1);
    }

    mongoose.connect(process.env.MONGO_URL)

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();