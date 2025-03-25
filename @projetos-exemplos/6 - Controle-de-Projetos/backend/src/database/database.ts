import sqlite from 'sqlite3'
import { open } from 'sqlite'

export async function openDB() {
    return open({
        filename: "./database.db",
        driver: sqlite.Database
    })
}

export async function initDB() {
    const db = await openDB()
    await db.exec(`
        CREATE TABLE IF NOT EXISTS projetos(
        id TEXT NOT NULL,
        nome TEXT NOT NULL,
        descricao TEXT NOT NULL,
        data_inicio TEXT NOT NULL ,
        data_conclusao TEXT ,
        status TEXT NOT NULL
        )
        `)
    console.log('Banco de dados inicializado!')
}
