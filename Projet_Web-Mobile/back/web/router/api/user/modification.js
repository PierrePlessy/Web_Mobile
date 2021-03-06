/**
 * Created by Alexandre on 15/04/2017.
 */
var router = require('express').Router();
var User = require('../../../../models/User.js');
var hash = require('../../../../helpers/hash');

router.post("/username", function(req, res) {
    User.findOne({username: req.user.username}, function(err, user) {
        if (!user) {
            res.status(401).json({message: ''});
        }
        else {
            if(req.body.newUsername === null) {
                res.status(401).json({message: 'Entrez un username'});
            }
            else {
                user.username = req.body.newUsername;
                user.save();
            }

        }
    });
});


router.post("/email", function(req, res) {
    User.findOne({email: req.user.email}, function(err, user) {
        if (!user) {
            res.status(401).json({message: ''});
        }
        else {
            if(req.body.newEmail === null) {
                res.status(401).json({message: 'Entrez un email'});
            }
            else {
                user.email = req.body.newEmail;
                user.save();
            }
        }
    });
});


router.post("/password", function(req, res) {
    User.findOne({id: req.user.id}, function(err, user) {
        if (!user) {
            res.status(401).json({message: ''});
        }
        else {
            if(req.body.newPassword === null) {
                res.status(401).json({message: 'Entrez un password'});
            }
            else {
                user.password = hash.hashPassword(req.body.newPassword);
                user.save();
            }
        }
    });
});

router.post("/idSteam", function(req, res) {
    console.log("Change ID Steam");
    console.log(req.user.idSteam);
    User.findOne({idSteam: req.user.idSteam}, function(err, user) {
        if (!user) {
            res.status(401).json({message: ''});
            console.log("Non");
        }
        else {
            if(req.body.newIdSteam === null) {

                res.status(401).json({message: 'Entrez un Id'});
                console.log("Pas d'ID");
            }
            else {
                user.idSteam = req.body.newIdSteam;
                console.log(user.idSteam);
                user.save();
            }
        }
    });
});

module.exports = router;