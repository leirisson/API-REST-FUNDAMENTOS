import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("dentistas", (table) => {
        table.increments("id").primary(),
        table.string("nome").notNullable(),
        table.string("especialidade").notNullable(),
        table.string("cro").unique().notNullable(),
        table.timestamp("creted_at").defaultTo(knex.fn.now())
    })

}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("dentistas")
}

