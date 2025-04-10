import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("curso_modulos", (table) => {
        table.increments("id").primary(),
        table.string("nome").notNullable(),
        

        // criando uma coluna de chave estrangeira
        table.integer("curso_id").references("id").inTable("cursos")
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("curso_modulos")
}

