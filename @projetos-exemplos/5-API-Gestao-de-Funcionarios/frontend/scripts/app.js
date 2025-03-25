const API_URL = "http://localhost:3333/funcionarios";
const itemForm = document.getElementById("itemForm");
const itemNameInput = document.getElementById("itemName");
const itemList = document.getElementById("itemList");


let editingItemId = null;

// Função para carregar e exibir os itens

async function CarregarFuncionarios(){
    const response = await fetch(API_URL)
    const data = await response.json()
    const funcionarios = data.funcionarios


    itemList.innerHTML = '' // Limpa a lista antes de carregar os itens

    funcionarios.forEach(funcionario => {
        const li = document.createElement('li')
        li.textContent = funcionario.nome

        //Botão para editar
        const editButton = document.createElement('button')
        editButton.textContent = 'Editar'
        editButton.onclick = () =>  editFuncionario(funcionario.id, funcionario.nome)

         // Botão para deletar
         const deleteBtn = document.createElement('button')
         deleteBtn.textContent = "Deletar"
         deleteBtn.onclick = () => deletarFuncionario(funcionario.id)

         li.appendChild(editButton)
         li.appendChild(deleteBtn)
         itemList.appendChild(li)

    });
}

// Função para adicionar ou atualizar um funcionario
async function saveFuncionario(e){
    e.preventDefault()
    
    const nomeFuncionario = itemNameInput.value.trim()

   

    if(nomeFuncionario){
        if(editingItemId){
            // atualizar o nome de um funcionario existente
            await fetch(`${API_URL}/${editingItemId}`, {
                method: "PUT",
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify({nome: nomeFuncionario})
            })
        } else {
            // adcionar um novo funcionario
            await fetch(API_URL, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body : JSON.stringify({nome: nomeFuncionario})
            })
        }

        itemNameInput.value = ''  // Limpa o campo de entrada
        CarregarFuncionarios() // Recarrega a lista de itens

    }
}


// Função para editar um funcionario
function editFuncionario(id, nome){
    editingItemId = id // Define o ID do item que está sendo editado
    itemNameInput.value = nome // Preenche o campo de entrada com o nome do item
}
// Função para deletar um

async function deletarFuncionario(id){
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })

    CarregarFuncionarios()
}


// Evento de submit do formulário
itemForm.addEventListener('submit', saveFuncionario);

// Carrega  funcionarios ao carregar a página
CarregarFuncionarios()