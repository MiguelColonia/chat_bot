const { Sequelize } = require('sequelize') // libreria 
require('dotenv').config()


const db = new Sequelize({
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    logging: false
})


module.exports = db


/*Este código configura y establece una conexión a una base de datos utilizando Sequelize, una biblioteca de Node.js para la gestión de bases de datos relacionales.
 



Se importa la clase Sequelize desde el módulo 'sequelize'.
Se importa el módulo 'dotenv', que se utiliza para cargar las variables de entorno desde un archivo .env.
Configuración de la base de datos:

Se crea una instancia de Sequelize llamada db.
Se configuran los parámetros de conexión utilizando valores de variables de entorno definidas en el archivo .env. Estos valores incluyen:
dialect: El dialecto de la base de datos a utilizar (MySQL, PostgreSQL, SQLite, etc.).
host: La dirección del host de la base de datos.
username: El nombre de usuario para acceder a la base de datos.
password: La contraseña asociada al usuario.
database: El nombre de la base de datos a la que se va a conectar.
logging: Si se establece en false, desactiva la salida de registros de SQL en la consola.
Exportación de la instancia de Sequelize:

Se exporta la instancia de db, lo que permite que otros archivos en el proyecto accedan a la misma conexión a la base de datos configurada.
En resumen, este código establece una conexión a una base de datos utilizando Sequelize y utiliza variables de
entorno definidas en el archivo .env para configurar los parámetros de conexión. La instancia de db configurada se exporta para que pueda ser
utilizada en otros lugares de la aplicación, como modelos y controladores.*/

/*Sequelize es una biblioteca de Node.js que se utiliza como ORM (Object-Relational Mapping), 
lo que significa que actúa como un intermediario entre una base de datos relacional (como PostgreSQL, MySQL, SQLite, etc.) 
y tu aplicación. Su objetivo principal es simplificar y abstraer la interacción con la base de datos, 
permitiéndote trabajar con datos y consultas de manera más orientada a objetos en lugar de escribir consultas SQL directamente.*/