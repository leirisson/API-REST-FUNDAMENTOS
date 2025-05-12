import 'dotenv/config'
import { app } from "./app";
import { routes } from './routes';


app.use(routes)

app.listen(process.env.PORT, () => console.log('server is ruinnig ... '))