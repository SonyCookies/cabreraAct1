const userController = {
  greetUser: (req, res) => {
    res.render("index");
  },
  home: (req, res) => {
    res.render("home");
  },
  about: (req, res) => {
    res.render("about");
  },
  contacts: (req, res) => {
    res.render("contacts");
  },
  settings: (req, res) => {
    res.render("settings");
  },
};

module.exports = userController;
