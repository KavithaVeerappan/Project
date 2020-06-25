const connnection = require('../config/configuration')
const path = require('path')
const fs = require('fs')


function display_employee(req, res) {

    connnection.query('select employee_id,employee_name,qualification from employee', (err, results, fields) => {
        if (err) {
            console.log(err)
            return res.send(err)

        }
        else {

            return res.send(results)

        }

    })


}

function insert_employee(req, res)  {
    const { employee_id,employee_name,qualification } = req.body;

   
    connection.query('INSERT INTO employee(employee_id,employee_name,qualification) VALUES(?,?,?)', [employee_id,employee_name,qualification], (err, results, fields) => {
        if (err) {
            console.log(err)
            res.status(500);
            return res.send(err.sqlMessage)

        }
        else {
            console.log('Employee details added')
            return res.send(results)

        }

    })
}

module.exports = {
    display_employee: display_employee,
    insert_employee: insert_employee
}
