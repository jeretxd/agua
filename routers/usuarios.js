const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarios");
const usuarioController = new UsuarioController();

// Ruta para la página principal que redirige a /home
router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", (req, res) => {
    const nombreUsuario = req.session.usuario ? req.session.usuario.nombre : null;
    console.log("Nombre del usuario en sesión:", nombreUsuario);
    res.render("index", { nombreUsuario });
});

router.post("/registro", (req, res) => usuarioController.guardarUsuario(req, res));

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("No se pudo cerrar sesión.");
        }
        res.redirect("/login");
    });
});

router.get("/registro",(req,res)=>{
    res.render("crearcuenta");
});

router.post("/login", (req, res) => usuarioController.loginUsuario(req, res));

module.exports = router;