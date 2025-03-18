import { Request, Response } from "express";
import { randomUUID } from "crypto";

let listaClientes: object[] = [];

export class ClientesController {
  index(request: Request, response: Response) {
    response.status(200).json({ clientes: listaClientes });
  }

  create(request: Request, response: Response) {
    const { name, email, phone } = request.body;

    const cliente = {
      id: randomUUID(),
      name,
      email,
      phone,
    }

    listaClientes.push(cliente)

    response.status(201).send()
  }

  get_one(request:Request, response:Response){
    const {id} = request.params

    const cliente = listaClientes.find((cliente ): boolean => cliente.id === id)


    if(!cliente){
        response.status(404).json({mensagem: 'cliente não encontrado'})
    }

    response.status(200).send(cliente)

  }

  update(request: Request, response: Response){
    const {name, email, phone} = request.body
    const {id} = request.params

    const cliente_encontrado = listaClientes.find((cliente): boolean  => cliente.id ===id)
    let cli = {...cliente_encontrado, name, email, phone}

    listaClientes = [...listaClientes, cli]

    response.status(200).json(listaClientes)

    
  }
}
