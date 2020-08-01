// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto de banco de dados, para fazer as operações

// db.serialize(() => {
//     //criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // // Inserir dados na tabela
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
//     //     "Colectoria",
//     //     "Vilage do sol 2",
//     //     "Número 260",
//     //     "Rondônia",
//     //     "Cacoal",
//     //     "Resíduos eletrônicos, Lâmpadas"
//     // ]
    
//     // function afterInsertData(err) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // }

//     // //db.run(query, values, afterInsertData)

//     // //Consultar os dados da tabela
//     // db.all(`SELECT * FROM places`, function(err, rows){
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros")
//     //     console.log(rows)
//     // })
// }) 