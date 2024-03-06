import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./Routes/auth.routes.js";
import tasksRoutes from "./Routes/tasks.routes.js";
import favoritesRoutes from "./Routes/favorites.routes.js";
import calendarRoutes from "./Routes/calendar.routes.js";

const app = express()

//TODO: Aplicar middleware necesarios
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: "GET, POST, OPTIONS, PUT, DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// //todo: aplicar manejo de Cors para dar permisos a nuestro front
// app.use((req, res, next) => { 
//   //res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true"); 
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     ); 
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); 
//     next();
//   });

  app.get("/", (req, res) => {
    res.status(202).json({ message: "Tasks ToDoList" });
  });

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser()) 

app.use("/api", authRoutes)
app.use("/api", tasksRoutes)
app.use("/api", favoritesRoutes)
app.use("/api", calendarRoutes)

export default app;