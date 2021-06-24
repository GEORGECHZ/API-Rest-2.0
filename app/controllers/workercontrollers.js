let worker = require('../models/worker');
let users = require('../users/users.json');
let n = require('underscore');
module.exports = {
    readAll:(req, res) => {
        res.json(users);
    },
    create:(req, res) => {
        let { name, age, rfc, phone, email } = req.body;
    if (name && age && rfc && phone, email){
        let id = users.length + 1;
        let newUser = {...req.body, id};
        users.push(newUser);
        res.json(users);
    } else {
        res.json({error: 'Error al agregar nuevo Trabajador'});
    }
    },
    search:(req, res) => {
        let { id } = req.params;
        n.each(users, (user, i) => {
            if (user.id == id){
                res.json(user)
            }
        })
    },
    modify:(req, res) => {
        let { id } = req.params;
        let { name, age, rfc, phone, email } = req.body;
        if (name && age && rfc && phone && email){
            n.each(users, (user, i) => {
                if(user.id == id){
                    user.name = name;
                    user.age = age;
                    user.rfc = rfc;
                    user.phone = phone;
                    user.email = email;
                }
            })
            res.json(users);
        } else {
            res.json({error: 'Error al modificar Trabajador'});
        }
    },
    delete:(req,res) => {
        let { id } = req.params;
        n.each(users, (user, i) => {
            if (user.id == id){
            users.splice(i, 1);
            }
        })
        res.send(users);
    }
}