// Abre modal

const openModal = (nome, email, titulo_perfil, bio, nome_usuario) => {
  const table = document.querySelector("table");
  const modal = `<div class="modal active" id="modal">
  <div class="modal__content">
    <header class="modal__header">
      <h2>User Edit</h2>
      <span class="modal__close" id="modalClose" onclick="closeModal()"
        >&#10006;</span
      >
    </header>
    <form id="form" class="modal__form">
    <div class="appearance__container">
        <form action="/admin/appearance/update" method="POST">
          <div class="profile__content">
            <img src="/img/default-profile.png" alt="" />
            <div>
            <small>Nome</small>
              <input
              type="text"
              id="name"
              name="name"
              class="input__profile"
              placeholder="Name"
              value="${nome}"
              required
            />
            <small>E-mail</small>
            <input
              type="email"
              id="email"
              name="email"
              class="input__profile"
              placeholder="Email"
              value="${email}"
              required
            />
            </div>
          </div>
          <small>User Name</small>
          <input
            type="text"
            id="username"
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
              id="title_profile"
              placeholder="Profile Title"
              value="${titulo_perfil}"
            />
            <small>Bio</small>
            <textarea
              class="textarea__profile"
              name="bio"
              id="bio"
              cols="30"
              rows="2"
              maxlength="80"
              placeholder="Enter a bio description to appear on your Linktree"
            >
${bio}</textarea
            >
            <small id="countLength"></small>
        </div>
      
      <input type="hidden" name="id" value="${id}">
      <div class="modal__buttons-container">
        <button id="save" class="btn purple" onclick="saveUser()">
          Save
        </button>
        <button id="cancel" class="btn red" onclick="closeModal()">
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>`;
  table.insertAdjacentHTML("afterend", modal);
};

// Fecha modal
const closeModal = () => {
  document.querySelector(".modal.active").remove();
  clearFields();
};

// Verificando se os campos do modal estão vazios
const isValid = () => {
  return document.getElementById("form").reportValidity();
};

// Limpando os campos do modal ao fechar
const clearFields = () => {
  const fields = document.querySelectorAll(".modal__field");
  fields.forEach((fields) => (fields.value = ""));
};

// Capturando e enviando inputs
const saveUser = () => {
  if (isValid) {
    const user = {
      nome: document.getElementById("name").value,
      email: document.getElementById("email").value,
    };
    console.log(user);
    closeModal();
  }
};

// Função para abrir o modal já com os campos preenchidos
const fillFields = (user) => {
  document.getElementById("name").value, document.getElementById("email").value;
};

// Edição o usuário, onde a função fillFields será passada
const edit = () => {
  openModal();
};

// Verifica se o usuário é administrador e seta no checkbox
window.addEventListener("load", function () {
  let columnsAdmin = document.querySelectorAll('td[id^="admin-user"]');
  // console.log(columnsAdmin)

  columnsAdmin.forEach((colum) => {
    if (colum.childNodes[1].value == 1) colum.childNodes[3].checked = true;
  });
});

// Excluir linha do usuário selecionado
const deleteUser = (id) => {
  document.getElementById(`line-user-${id}`).remove();
};
