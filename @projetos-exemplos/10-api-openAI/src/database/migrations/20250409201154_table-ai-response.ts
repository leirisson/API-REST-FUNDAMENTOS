import { table } from "console";
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("openai", (table) => {
        table.increments('id').primary(),
        table.string('name').notNullable(),
        table.string('prompt').notNullable(),
        table.string('response_ia').notNullable(),
        table.string('created_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('openai')
}

