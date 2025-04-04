import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("paciente", (table) => {
        table.increments("id").primary(),
        table.string("nome").notNullable(),
        table.string("cpf").unique(),
        table.timestamp("data_nascimento").notNullable(),
        table.string("telefone").notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("paciente")
}

