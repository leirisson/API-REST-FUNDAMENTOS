import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("produtos", (table) => {
        table.increments('id').primary(),
        table.string('nome').notNullable(),
        table.string('descricao').notNullable(),
        table.integer('preco').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
   await  knex.schema.dropTable("produtos")
}

