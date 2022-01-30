// Abre modal
const openModal = () =>
  document.getElementById("modal").classList.add("active");

// Fecha modal
const closeModal = () => {
  document.getElementById("modal").classList.remove("active");
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
    document.getElementById('name').value,
    document.getElementById('email').value
}

// Edição o usuário, onde a função fillFields será passada
const edit = () => {
    openModal()
}
