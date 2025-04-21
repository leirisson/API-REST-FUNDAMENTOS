import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { name: "batata frita", price: 25.65 },
        { name: "suco", price: 10.00 },
        { name: "hambúrguer", price: 30.50 },
        { name: "pizza", price: 45.00 },
        { name: "refrigerante", price: 8.75 },
        { name: "sorvete", price: 15.20 },
        { name: "salada", price: 18.90 },
        { name: "esfiha", price: 6.50 },
        { name: "coxinha", price: 5.00 },
        { name: "pastel", price: 7.25 },
        { name: "café", price: 4.50 },
        { name: "bolo", price: 12.00 },
        { name: "sanduíche", price: 22.30 },
        { name: "torta", price: 20.00 },
        { name: "pão de queijo", price: 9.00 },
        { name: "hot dog", price: 14.75 },
        { name: "nhoque", price: 35.00 },
        { name: "lasanha", price: 40.00 },
        { name: "empada", price: 8.00 },
        { name: "água", price: 3.00 }
    ]);
};
