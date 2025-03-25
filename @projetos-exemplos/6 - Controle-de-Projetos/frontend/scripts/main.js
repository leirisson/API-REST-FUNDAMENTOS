const ElementForm = document.getElementById("formProjeto");
const ElementInputNome = document.getElementById("nome");
const ElementTextArea = document.getElementById("descricao");
const ElementDataInicio = document.getElementById("data_inicio");
const ElementDataConclusao = document.getElementById("data_conclusao");
const ElementSelectstatus = document.getElementById("status");
const listaProjetos = document.getElementById("list-projetos");
const itemProjeto = document.getElementById("item-projeto");

const API_URL = "http://localhost:3333/projetos";

let btnEditar = null;

async function carregarProjetos() {
  const response = await fetch(API_URL);
  const projetos = await response.json();

  // Limpa a lista antes de carregar os itens
  listaProjetos.innerHTML = "";

  projetos.forEach((projeto) => {
    const li = document.createElement("li");
    li.setAttribute("id", "item-projeto");

    // Criando os elementos internos
    const div_titulo = document.createElement("div");
    div_titulo.setAttribute("class", "task-title");
    div_titulo.innerText = projeto.nome;

    const div_descricao = document.createElement("div");
    div_descricao.setAttribute("class", "task-description");
    div_descricao.innerText = projeto.descricao;

    const div_footer = document.createElement("div");
    div_footer.setAttribute("class", "task-footer");

    const span = document.createElement("span");
    span.textContent = `Status: ${projeto.status}`;

    const divButtons = document.createElement("div");
    divButtons.setAttribute("class", "buttons");

    // Botão para editar
    const btnEditar = document.createElement("button");
    btnEditar.setAttribute("class", "edit");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = () =>
      editarProjeto(
        projeto.id,
        projeto.nome,
        projeto.descricao,
        projeto.data_inicio,
        projeto.data_conclusao,
        projeto.status
      );

    // Botão para deletar (Corrigido o erro de classe e texto)
    const btnDeletar = document.createElement("button");
    btnDeletar.setAttribute("class", "delete");
    btnDeletar.textContent = "Deletar";
    btnDeletar.onclick = () => deletarUmProjeto(projeto.id)

    // Adicionando os botões ao div de botões
    divButtons.appendChild(btnEditar);
    divButtons.appendChild(btnDeletar);

    // Montando a estrutura do item do projeto
    div_footer.appendChild(span);
    div_footer.appendChild(divButtons);

    li.appendChild(div_titulo);
    li.appendChild(div_descricao);
    li.appendChild(div_footer);

    // Adicionando o item à lista de projetos
    listaProjetos.appendChild(li);
  });
}

// Função para adicionar ou atualizar um PROJETO
async function salvarOuEditarProjeto(e) {
  e.preventDefault();

  const nomeProjeto = ElementInputNome.value.trim();
  const descrcaiDoProjeto = ElementTextArea.value.trim();
  const data_inicio = ElementDataInicio.value;
  const data_conclusao = ElementDataConclusao.value;
  const statusDoProjeto = ElementSelectstatus.value;

  if (nomeProjeto && descrcaiDoProjeto) {
    if (btnEditar) {
      // atualizar o projeto existente
      await fetch(`${API_URL}/${btnEditar}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nomeProjeto,
          descricao: descrcaiDoProjeto,
          data_inicio,
          data_conclusao,
          status: statusDoProjeto,
        }),
      });
    } else {
    
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nomeProjeto,
          descricao: descrcaiDoProjeto,
          data_inicio,
          data_conclusao,
          status: statusDoProjeto,
        }),
      });
    }

    ElementInputNome.value = "";
    ElementTextArea.value = "";

    carregarProjetos();
  }
}

function editarProjeto(
  id,
  nome,
  descricao,
  data_inicio,
  data_conclusao,
  status
) {
  btnEditar = id;
  ElementInputNome.value = nome;
  ElementTextArea.value = descricao;
  ElementDataInicio.value = data_inicio;
  ElementDataConclusao.value = data_conclusao;
  ElementSelectstatus.value = status;

}

async function deletarUmProjeto(id){
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })

    carregarProjetos()
}

ElementForm.addEventListener("submit", salvarOuEditarProjeto);

carregarProjetos();
