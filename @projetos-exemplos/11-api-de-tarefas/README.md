Exercício de CRUD: Gerenciamento de Tarefas com API
Você foi contratado para desenvolver uma API RESTful para um sistema de gerenciamento de tarefas.
O sistema deve permitir o cadastro de usuários e a criação, leitura, atualização e exclusão de tarefas associadas a esses usuários. Para isso, você precisará trabalhar com duas entidades principais: Usuários e Tarefas .

Requisitos do Sistema
## Entidade Usuário :
## Atributos:
id (identificador único, gerado automaticamente)
nome (obrigatório, string)
email (obrigatório, string, deve ser único)
senha (obrigatório, string)


## Entidade Tarefa :
## Atributos:
id (identificador único, gerado automaticamente)
titulo (obrigatório, string)
descricao (opcional, string)
status (obrigatório, enum: "pendente", "em andamento", "concluída")
data_criacao (gerada automaticamente ao criar a tarefa)
usuario_id (identificador do usuário ao qual a tarefa está associada)
Relacionamentos :
Um usuário pode ter várias tarefas .
Uma tarefa pertence a um único usuário .