import 'dotenv/config'
import { app } from './app'


const PORT = process.env.PORT

app.listen(PORT, () => { console.log(`🚀 Server rodando em http://localhost:${PORT}`) })