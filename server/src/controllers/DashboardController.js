const DashboardController = {
  index: (req, res) => {
    return res.render("dashboard");
  },
};

// const { getAllUsuarios } = require("../../services/usuario");
// const DashboardController = {
//   index: async (req, res) => {
//     const usuarios = await getAllUsuarios();
//     return res.render("dashboard", {
//       usuarios,
//     });
//   },
// };

module.exports = DashboardController;
