const mysql = require("mysql2");

// Crear conexión con Clever Cloud
const conx = mysql.createConnection({
    host: "bmrx7x18khedmw427i8z-mysql.services.clever-cloud.com",
    user: "utfvpjullb8eukgt",
    password: "oKxMtve8Ipax7uJuPj6K", // 👈 tu contraseña real de Clever Cloud
    database: "bmrx7x18khedmw427i8z",
    port: 3306
});

conx.connect((error) => {
   if (error) {
      console.log("❌ Error al conectar:", error);
      return;
   }
   console.log("✅ Conectado a MySQL en Clever Cloud");
});

module.exports = conx;
