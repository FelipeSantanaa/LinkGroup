const { getUsers } = require('../../services/usuario')

const DashboardController = {
  index: async (req, res) => {
    const { id } = req.cookies.usuario

    try {
      const usuarios = await getUsers()
      return res.render('dashboard', { usuarios })
    } catch (e) {
      console.log(e)
    }
  }
}

// const { getAllUsuarios } = require("../../services/usuario");
// const DashboardController = {
//   index: async (req, res) => {
//     const usuarios = await getAllUsuarios();
//     return res.render("dashboard", {
//       usuarios,
//     });
//   },
// };

module.exports = DashboardController
