import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app
	.use(express.json())
	.use(cors())

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));


export default app;