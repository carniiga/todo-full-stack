import { authRoute} from "../routes/auth/auth.routes.js";
import { todoRoute } from "../routes/todo/todo.routes.js";
import { server } from "./app.js";

const port = 3000;


server.use("/" , todoRoute)
server.use("/" , authRoute)
server.listen(port , () => {
    console.log("listening on port 3000")
})