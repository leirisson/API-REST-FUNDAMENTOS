import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    // Inserts seed entries
    await knex("dentistas").insert([
        {
            nome: "Dr. Carlos Silva",
            especialidade: "Ortodontia",
            cro: "SP12345"
        },
        {
            nome: "Dra. Ana Oliveira",
            especialidade: "Endodontia",
            cro: "RJ67890"
        },
        {
            nome: "Dr. Marcos Souza",
            especialidade: "Implantodontia",
            cro: "MG54321"
        },
        {
            nome: "Dra. Juliana Costa",
            especialidade: "Odontopediatria",
            cro: "RS98765"
        },
        {
            nome: "Dr. Roberto Almeida",
            especialidade: "Periodontia",
            cro: "PR12321"
        },
        {
            nome: "Dra. Patricia Lima",
            especialidade: "Dentística",
            cro: "SC45678"
        },
        {
            nome: "Dr. Fernando Santos",
            especialidade: "Cirurgia Bucomaxilofacial",
            cro: "BA78901"
        },
        {
            nome: "Dra. Camila Rocha",
            especialidade: "Prótese Dentária",
            cro: "ES23456"
        },
        {
            nome: "Dr. Gustavo Pereira",
            especialidade: "Odontologia Estética",
            cro: "GO34567"
        },
        {
            nome: "Dra. Luciana Mendes",
            especialidade: "Ortodontia",
            cro: "DF89012"
        }
    ]);
};
