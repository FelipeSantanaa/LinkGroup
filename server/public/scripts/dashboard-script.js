// Abre modal

const openModal = (
  nome,
  email,
  titulo_perfil,
  bio,
  nome_usuario,
  id,
  user_admin
) => {
  const table = document.querySelector('table')
  const modal = `<div class="modal active" id="modal">
  <div class="modal__content">
    <header class="modal__header">
      <h2>User Edition</h2>
      <span class="modal__close" id="modalClose" onclick="closeModal()"
        >&#10006;</span
      >
    </header>
    <form id="form" class="modal__form" action="/dashboard/update/${id}" method="POST">
    <div class="appearance__container">
        <form action="/admin/appearance/update" method="POST">
          <div class="profile__content">
            <img src="/img/default-profile.png" alt="" />
            <div>
            <small>Name</small>
              <input
              type="text"
              id="input-name"
              name="name"
              class="input__profile"
              placeholder="Name"
              value="${nome}"
              required
            />
            <small>Email</small>
            <input
              type="email"
              id="input-email"
              name="email"
              class="input__profile"
              placeholder="Email"
              value="${email}"
              required
            />
            </div>
          </div>
          <div class="admin">
            <input
              type="checkbox"
              id="is_admin"
              name="is_admin"
              value="${admin}"
              onChange="tornarAdmin()"
            />
            <label for="is_admin"><small>Administrador</small></label>
          </div>
          <small>Username</small>
          <input
            type="text"
            id="input-username"
            name="username"
            class="input__profile"
            placeholder="User name"
            value="${nome_usuario}"
            required
          />
          <small>Profile Title</small>
            <input
              class="input__profile"
              type="text"
              name="title_profile"
              id="input-title_profile"
              placeholder="Profile Title"
              value="${titulo_perfil}"
            />
            <small>Bio</small>
            <textarea
              class="textarea__profile"
              name="bio"
              id="input-bio"
              cols="30"
              rows="2"
              maxlength="80"
              placeholder="Enter a bio description to appear on your Linktree"
            >
${bio}</textarea
            >
            <small id="countLength"></small>
        </div>
      
      <input type="hidden" id="input-id" name="id" value="${id}">
      <div class="modal__buttons-container">
        <button id="save" class="btn purple">
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
  // countLengthBio();
  enableButtonSave()

  const is_admin = document.querySelector('#is_admin')
  if (user_admin == 1) {
    is_admin.checked = true
    is_admin.value = 1
  } else {
    is_admin.checked = false
    is_admin.value = 0
  }
}

// Monitora checkbox Administrador e altera seu value
const tornarAdmin = () => {
  if (is_admin.checked) {
    is_admin.value = 1
  } else {
    is_admin.value = 0
  }
}

// Fecha modal
const closeModal = () => {
  document.querySelector('.modal.active').remove()
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

// // Capturando e enviando inputs
// const saveUser = () => {
//   if (isValid) {
//     const user = {
//       nome: document.getElementById('name').value,
//       email: document.getElementById('email').value
//     }
//     console.log(user)
//     closeModal()
//   }
// }

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

  columnsAdmin.forEach(colum => {
    if (colum.childNodes[1].value == 1) colum.childNodes[3].checked = true
  })
})

// Excluir linha do usuário selecionado
const deleteUser = id => {
  document.getElementById(`line-user-${id}`).remove()
}

// Script para ouvir a mudança dos inputs de preenchimento obrigatório na edição do usuário e habilitar botão save
const enableButtonSave = () => {
  const button = document.getElementById('save'),
    name = document.getElementById('input-name'),
    email = document.getElementById('input-email'),
    username = document.getElementById('input-username')

  setInterval(() => {
    if (
      !name.value.length > 0 ||
      !email.value.length > 0 ||
      !username.value.length > 0
    ) {
      button.disabled = true
      button.style.backgroundColor = '#d7dce1'
      button.style.cursor = 'default'
    } else {
      button.disabled = false
      button.style.backgroundColor = '#7c41ff'
      button.style.cursor = 'pointer'
    }
  }, 1000)
}

function countLengthBio() {
  const txtBio = document.getElementById('bio'),
    small = document.getElementById('countLength')

  small.innerText = txtBio.value.length + '/80'

  txtBio.addEventListener('input', function () {
    small.innerText = txtBio.value.length + '/80'
  })
}
