const express = require("express")
const app = express()
const http = require('http'); 
const routerusuarios = require("./routers/usuarios")
const routerclientes = require("./routers/clientes")
const server = http.createServer(app);   
const port = process.env.PORT || 3000;
const path = require('path');
const session = require("express-session");

app.use(
  session({
    secret: "mi_secreto_seguro", 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);


// Configuración de body-parser  
app.use(express.urlencoded({ extended: false }));  
app.use(express.json());  
// Archivos estáticos  
app.use('/public', express.static("public"));  
app.use(express.static(path.join(__dirname, 'public')));  

// Configuración de EJS como motor de vistas  
app.set("view engine", "ejs");  
app.use("/", routerusuarios); 
app.use("/", routerclientes);

server.listen(port, () => {  
    console.log(`Servidor corriendo en el puerto ${port}`);  
});