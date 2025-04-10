import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("cursos", (table) => {
        table.increments("id").primary(),
        table.string("nome").notNullable(),
        table.integer("carga_horaria").notNullable(),
        table.timestamp("creted_at").defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("cursos")
}

