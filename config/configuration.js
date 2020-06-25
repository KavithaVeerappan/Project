const sql = require('mysql')
const connection = sql.createConnection({
    host: 'localhost',
   user: 'root',
   password: '',
   database: 'asset_management',
   multipleStatements: true

});


connection.connect((err, data) => {
   if (!err) {
       console.log("Database Connected")
   }
})

module.exports = connection
