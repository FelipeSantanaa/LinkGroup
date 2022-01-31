// Abre modal

const openModal = (nome, email) => {
  const table = document.querySelector('table')
  const modal = `<div class="modal active" id="modal">
  <div class="modal__content">
    <header class="modal__header">
      <h2>User</h2>
      <span class="modal__close" id="modalClose" onclick="closeModal()"
        >&#10006;</span
      >
    </header>
    <form id="form" class="modal__form">
      <input
        type="text"
        id="nome"
        class="modal__field"
        placeholder="Name"
        value="${nome}"
        required
      />
      <input
        type="email"
        id="email"
        class="modal__field"
        placeholder="Email"
        value="${email}"
        required
      />
      <input type="hidden" name="id" value="${id}">
      <div class="modal__buttons-container">
        <button id="save" class="btn green" onclick="saveUser()">
          Save
        </button>
        <button id="cancel" class="btn red" onclick="closeModal()">
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>`
  table.insertAdjacentHTML('afterend', modal)
}

// Fecha modal
const closeModal = () => {
  document.getElementById('modal').classList.remove('active')
  clearFields()
}

// Verificando se os campos do modal estão vazios
const isValid = () => {
  return document.getElementById('form').reportValidity()
}

// Limpando os campos do modal ao fechar
const clearFields = () => {
  const fields = document.querySelectorAll('.modal__field')
  fields.forEach(fields => (fields.value = ''))
}

// Capturando e enviando inputs
const saveUser = () => {
  if (isValid) {
    const user = {
      nome: document.getElementById('name').value,
      email: document.getElementById('email').value
    }
    console.log(user)
    closeModal()
  }
}

// Função para abrir o modal já com os campos preenchidos
const fillFields = user => {
  document.getElementById('name').value, document.getElementById('email').value
}

// Edição o usuário, onde a função fillFields será passada
const edit = () => {
  openModal()
}

// Verifica se o usuário é administrador e seta no checkbox
window.addEventListener('load', function () {
  let columnsAdmin = document.querySelectorAll('td[id^="admin-user"]')
  // console.log(columnsAdmin)

  columnsAdmin.forEach(colum => {
    if (colum.childNodes[1].value == 1) colum.childNodes[3].checked = true
  })
})

// Excluir linha do usuário selecionado
const deleteUser = id => {
  document.getElementById(`line-user-${id}`).remove()
}
