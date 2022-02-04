import express from "express";
import initRoutes from "./src/routes";

const app = express();
const port = process.env.API_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
app.listen(port, async () => {
  console.log(`Server listening to the port ${port}`);
});
