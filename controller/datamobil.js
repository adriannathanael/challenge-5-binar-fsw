const{DataMobils} = require('../models')

module.exports = class {
    static addMobil(req, res, next) {
        console.log(req.body);
        DataMobils.create({
            nama: req.body.nama,
            harga: req.body.harga,
            ukuran: req.body.ukuran,
            imgmobil: req.body.imgmobil
        }).then((result) => {
            res.status(201).send({
                status: 201,
                message: 'New car created!',
                data: result
            })
        }).catch((err) => {
            res.status(400).send(err)
        });
    }

    static getAllMobil(req, res, next) {
        DataMobils.findAll()
        .then((result) => {
        res.status(200).send({
            status: 200,
            data: result
           })
        }).catch((err) => {
            res.status(400).send(err)
        });
    }

    static updateMobil(req, res, next) {
        DataMobils.update({
            nama: req.body.nama,
            harga: req.body.harga,
            ukuran: req.body.ukuran,
            imgmobil: req.body.imgmobil
        },{
            where: {id:req.body.id}, 
            returning:true
        }
        ).then((result) => {
            res.status(202).send({
                status: 202,
                message: 'New car created!',
                data: result
            })
        }).catch((err) => {
            res.status(400).send(err)
        });

    }

    static deleteMobil(req, res, next) {
        DataMobils.destroy({
            where: {id:req.body.id}, 
            returning:true
        }
        ).then((result) => {
            res.status(203).send({
                status: 203,
                message: 'Car deleted',
                
            })
        }).catch((err) => {
            res.status(400).send(err)
        });

    }
}