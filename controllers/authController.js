class authController {
  admin_login = async (req, res) => {
    console.log("Admin Login", req.body);
  };
}

module.exports = new authController();
