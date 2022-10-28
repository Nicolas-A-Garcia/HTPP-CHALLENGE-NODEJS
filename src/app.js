import  express  from "express";
import morgan from "morgan";
import films from "./routes/films.routes";
import actors from "./routes/actors.routes";
import directors from "./routes/routes.directors";
import tvShow from "./routes/tvShows.routes";
import authRoutes from "./routes/auth.routes";
import { createRoles } from "./libs/initialSetup";
import usersRoutes from "./routes/user.routes";

const app = express();
createRoles()

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req,res) =>{
    res.json("Welcome")
})

app.use("/api/films", films);
app.use("/api/actors", actors);
app.use("/api/directors", directors);
app.use("/api/tvShow", tvShow);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

export default app;