exports.getRegister = ('/register',(req, res) => {
    if (req.query.password == req.query.confirmPassword) {
        var user = new Object();
        user.name = req.query.name;
        user.email = req.query.email;
        user.password = req.query.password;
        user.telephone= req.query.telephone;
        user.document = req.query.document;
        user.userFunction = req.query.userFunction;
        res.status(200).send(user);
    }
})

exports.getLogout = ('/logout',(req, res) => {
    res.status(200).send();
})

exports.userExists = (req, res, next) => {
    res.status(200).send();
};


exports.getLogin = ('/login', (req, res) => {
    var user = new Object();
    user.name = "nome";
    user.email = req.query.email;
    user.password = req.query.password;
    user.telephone= "telefone";
    user.document = "documento";
    user.userFunction = "funcao";
    res.status(200).send(user);
})


