import 'dotenv/config'
import { app } from "./app";


const PORT  = process.env.PORT || 30000


app.listen(PORT, () => console.log(`servidor funvionando.... http://localhost:${PORT}`))
