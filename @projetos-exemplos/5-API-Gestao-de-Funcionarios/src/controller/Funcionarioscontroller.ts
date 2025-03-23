import { Request, Response } from "express";
import { z } from "zod";
import { randomUUID } from "crypto";

const dbFuncionarios: any[] = [];

export class Funcionarioscontroller {
  getAll(request: Request, response: Response) {
    if (dbFuncionarios.length === 0) {
      response.send("Nem um funcionários cadastrado.");
    } else {
      response.json({ funcionarios: dbFuncionarios });
    }
  }

  getOneFuncionario(request: Request, response: Response) {
    const createSchemaId = z.object({
      id: z.string(),
    });

    const { id } = createSchemaId.parse(request.params);

    const funcionarioEncontrado = dbFuncionarios.find((funcionario) =>
      funcionario.id === id ? funcionario : ""
    );

    if (!funcionarioEncontrado) {
      response.status(400).json({ mensagem: "Funcionario não encontrado" });
    } else {
        response.json({ funcionario: funcionarioEncontrado });
    }

    
  }

  createFuncionario(request: Request, response: Response) {
    const createSchemaBody = z.object({
      nome: z.string(),
      // cargo: z.string(),
      // departamento: z.string(),
      // salario: z.number(),
      // data_de_contratacao: z.string(),
    });

    // cargo, departamento, salario, data_de_contratacao

    const { nome, } =
      createSchemaBody.parse(request.body);

    const funcionario = {
      id: randomUUID(),
      nome,
      // cargo,
      // departamento,
      // salario,
      // data_de_contratacao,
    };

    dbFuncionarios.push(funcionario);

    response.status(201).send();
  }

  update(request: Request, response: Response) {
    const createSchemaId = z.object({
      id: z.string(),
    });

    const createSchemaBody = z.object({
        nome: z.string(),
        // cargo: z.string(),
        // departamento: z.string(),
        // salario: z.number(),
        // data_de_contratacao: z.string(),
    })

    const { id } = createSchemaId.parse(request.params);

    const { nome,} = createSchemaBody.parse(request.body)
    
    // cargo, departamento, salario, data_de_contratacao

    // retorna um novo arrai com um objeto funcionario, já com os dados atualizados
    const funcionarioEditado = dbFuncionarios.map(funcionario => funcionario.id === id ?  {...funcionario, nome, } : '')
    // cargo, departamento, salario, data_de_contratacao
    
    if(!funcionarioEditado){
        response.status(400).json({mensagem: 'funcionario não encontrado'})
    } else {
        response.json({mensagem: funcionarioEditado[0]}) // como vem apenas um objero pa posição zero, ja deixo fixo a posição zero do array
    }
   
  }

  delete(request: Request, response: Response){
    const createSchemaId = z.object({
        id: z.string(),
      });

    const { id } = createSchemaId.parse(request.params);

    const inddexFuncionario = dbFuncionarios.findIndex(funcionario => funcionario.id === id)

    if(inddexFuncionario !== -1){
        dbFuncionarios.splice(inddexFuncionario, 1)
        response.send()
    } else {
        response.status(400).send('não encontrado')
    }
  }
}
