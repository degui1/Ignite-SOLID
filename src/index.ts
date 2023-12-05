import express from "express";
import { serve, setup } from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerApi from "./swaggerApi.json";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", serve, setup(swaggerApi));
export { app };
