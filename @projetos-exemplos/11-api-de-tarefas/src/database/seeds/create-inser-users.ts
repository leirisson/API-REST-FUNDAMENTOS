import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { nome: "leirisson", email: "leirisson@email.com", senha: "leirisson@senha123" },
        { nome: "anaclara", email: "anaclara@email.com", senha: "anaclara@senha456" },
        { nome: "brunocosta", email: "brunocosta@email.com", senha: "brunocosta@senha789" },
        { nome: "carlosalmeida", email: "carlosalmeida@email.com", senha: "carlosalmeida@senha101" },
        { nome: "danielasantos", email: "danielasantos@email.com", senha: "danielasantos@senha112" },
        { nome: "eduardopereira", email: "eduardopereira@email.com", senha: "eduardopereira@senha131" },
        { nome: "fabianasilva", email: "fabianasilva@email.com", senha: "fabianasilva@senha141" },
        { nome: "gabrielamartins", email: "gabrielamartins@email.com", senha: "gabrielamartins@senha151" },
        { nome: "henriqueoliveira", email: "henriqueoliveira@email.com", senha: "henriqueoliveira@senha161" },
        { nome: "isabelaramos", email: "isabelaramos@email.com", senha: "isabelaramos@senha171" },
        { nome: "joaovitor", email: "joaovitor@email.com", senha: "joaovitor@senha181" },
        { nome: "karinacardoso", email: "karinacardoso@email.com", senha: "karinacardoso@senha191" },
        { nome: "lucasfernandes", email: "lucasfernandes@email.com", senha: "lucasfernandes@senha201" },
        { nome: "marcelagomes", email: "marcelagomes@email.com", senha: "marcelagomes@senha211" },
        { nome: "nathaliarodrigues", email: "nathaliarodrigues@email.com", senha: "nathaliarodrigues@senha221" },
        { nome: "otavioalves", email: "otavioalves@email.com", senha: "otavioalves@senha231" },
        { nome: "pauloricardo", email: "pauloricardo@email.com", senha: "pauloricardo@senha241" },
        { nome: "quiteriafreitas", email: "quiteriafreitas@email.com", senha: "quiteriafreitas@senha251" },
        { nome: "rafaelmendes", email: "rafaelmendes@email.com", senha: "rafaelmendes@senha261" },
        { nome: "samanthapinto", email: "samanthapinto@email.com", senha: "samanthapinto@senha271" },
        { nome: "thiagocastro", email: "thiagocastro@email.com", senha: "thiagocastro@senha281" }
    ]);
};
