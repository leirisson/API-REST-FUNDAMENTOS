import { prisma } from '../src/database/prisma'

async function seed(){
    await prisma.user.createMany({
         data : [
    {
        name: "Kiara Silva",
        email: "kiara@examplo.com"
    },
    {
        name: "João Santos",
        email: "joao@examplo.com"
    },
    {
        name: "Ana Oliveira",
        email: "ana@examplo.com"
    },
    {
        name: "Carlos Mendes",
        email: "carlos@examplo.com"
    },
    {
        name: "Fernanda Costa",
        email: "fernanda@examplo.com"
    },
    {
        name: "Lucas Almeida",
        email: "lucas@examplo.com"
    },
    {
        name: "Mariana Rocha",
        email: "mariana@examplo.com"
    },
    {
        name: "Pedro Henrique",
        email: "pedro@examplo.com"
    },
    {
        name: "Juliana Lima",
        email: "juliana@examplo.com"
    },
    {
        name: "Rafael Souza",
        email: "rafael@examplo.com"
    },
    {
        name: "Camila Fernandes",
        email: "camila@examplo.com"
    },
    {
        name: "Gustavo Nascimento",
        email: "gustavo@examplo.com"
    },
    {
        name: "Isabela Martins",
        email: "isabela@examplo.com"
    },
    {
        name: "Felipe Barros",
        email: "felipe@examplo.com"
    },
    {
        name: "Larissa Dias",
        email: "larissa@examplo.com"
    },
    {
        name: "Rodrigo Cunha",
        email: "rodrigo@examplo.com"
    },
    {
        name: "Aline Pereira",
        email: "aline@examplo.com"
    },
    {
        name: "Diego Araújo",
        email: "diego@examplo.com"
    },
    {
        name: "Priscila Reis",
        email: "priscila@examplo.com"
    },
    {
        name: "Thiago Lopes",
        email: "thiago@examplo.com"
    }
]
    })
}

seed().then(() => {
    console.log('Database seeded !')
    prisma.$disconnect()
})