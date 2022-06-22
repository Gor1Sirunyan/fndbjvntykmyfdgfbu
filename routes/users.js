var express = require('express');
var router = express.Router();
const models = require('../models');
/*const multer = require("multer");*/
/* GET users listing. */


router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/dashboard', function (req, res, next) {
    let session_email = req.session.email;
    if (session_email) {
        models.Dashboard.findAll()
            .then(dashboard => {
                dashboard = dashboard.map((row) => {
                    row = row.toJSON();

                    row.birthday = formatDate(row.birthday);
                    return row;
                });
                res.render('dashboard', {dashboard: dashboard});
            });
    } else {
        return res.redirect('/auth/login');
    }
});
router.get('/education', function (req, res, next) {
    let session_email = req.session.email;
    if (session_email) {
        console.log(`test get`,"**********0000")
        models.Universities.findAll()
            .then(universities => {
                universities =universities.toJSON();
                    models.Faculties.findAll({
                        where: {universitiesID: universities.universitiesID}

                }).then(faculties => {
                    faculties =faculties.toJSON();
                        res.render('education', { title: 'Express', universities:universities, faculties:faculties });
                });

            });
   } else {
        return res.redirect('/auth/login');
    }
});
router.post('/education', function (req, res, next) {
    let session_email = req.session.email;
    if (session_email) {
        let data = req.body;
        models.Education.create({
            university: data.university,
            languages: data.languages,
            courses: data.courses,
            direction: data.direction,
        })
            .then(() => {
                res.redirect('/users/education');
            });
    } else {
        return res.redirect('/auth/login');
    }
});
router.get('/addemployments', function (req, res, next) {
    let session_email = req.session.email;
    if (session_email) {
        res.render('addemployments', {title: 'Express'});
    } else {
        return res.redirect('/auth/login');
    }
});
router.post('/addemployments', function (req, res, next) {
    let data = req.body;
    let DbInsertData = {
        application_date: formatDateYYYYMMDD(data.application_date),
        interview_date: formatDateYYYYMMDD(data.interview_date),
        full_name: data.full_name,
        birthday: formatDateYYYYMMDD(data.birthday),
        profession: data.profession,
        education_id: data.education_id,
        experience_id: data.experience_id,
        comments: data.comments,
        phone_number: data.phone_number,
        email: data.email,
        created_at: formatDateYYYYMMDD(new Date()),
        updated_at: formatDateYYYYMMDD(new Date()),
    };
    models.Dashboard.create(DbInsertData)
        .then(() => {
            res.json({message: "Created form"})
        });
});
router.get('/educationview', function (req, res, next) {
    let session_email = req.session.email;
    if (session_email) {
        models.Education.findAll()
            .then(educationview => {
                educationview = educationview.map((row) => {
                    row = row.toJSON();

                    row.birthday = formatDate(row.birthday);
                    return row;
                });
                res.render('educationview', {educationview: educationview});
            });
    } else {
        return res.redirect('/auth/login');
    }
});
router.get('/edit/:id', function (req, res, next) {
    let session_email = req.session.email;
    if (session_email) {
        models.Dashboard.findOne({
            where: {id: req.params.id}
        })
            .then(user => {
                user = user.toJSON();
                user.birthday = formatDate(user.birthday);
                res.render('edit', {user: user});
                console.log(user, "*********************??????????????????")
            });
    } else {
        return res.redirect('/auth/login');
    }
});

router.post('/edit/:id', function (req, res, next) {
    models.Dashboard.findOne({
        where: {id: req.params.id}
    })
        .then((user) => {
            if (!user) {
                return res.render(res.render('edit', {message: "User Not Found!"}));
            }
            let data = req.body;
            user.application_date = formatDateYYYYMMDD(data.application_date);
            user.interview_date = formatDateYYYYMMDD(data.interview_date);
            user.full_name = data.full_name;
            user.birthday = formatDateYYYYMMDD(data.birthday);
            user.profession = data.profession;
            user.education_id = data.education_id
            user.experience_id = data.experience_id;
            user.comments = data.comments;
            user.phone_number = data.phone_number;
            user.email = data.email;
            user.created_at = data.created_at;
            user.updated_at = data.updated_at;

            user.save();
            res.redirect('/users/dashboard');
        });

});
router.get('/editeducation/:id', function (req, res, next) {
    let session_email = req.session.email;
    if (session_email) {
        models.Education.findOne({
            where: {id: req.params.id}
        })
            .then(user => {
                user = user.toJSON();
                res.render('editeducation', {user: user});
                console.log(user, "*********************??????????????????")
            });
    } else {
        return res.redirect('/auth/login');
    }
});
router.post('/editeducation/:id', function (req, res, next) {
    models.Education.findOne({
        where: {id: req.params.id}
    })
        .then((user) => {
            if (!user) {
                return res.render(res.render('edit', {message: "User Not Found!"}));
            }
            let data = req.body;
            user.university = data.university;
            user.languages = data.languages;
            user.courses = data.courses;
            user.direction = data.direction;

            user.save();
            res.redirect('/users/educationview');
        });

});
router.get('/delete/:id', function (req, res, next) {

    models.Dashboard.destroy({
        where: {id: req.params.id}
    })
        .then(() => {
            res.status(200);
            res.json({message: "success"});
        });

});
router.get('/delet/:id', function (req, res, next) {

    models.Education.destroy({
        where: {id: req.params.id}
    })
        .then(() => {
            res.status(200);
            res.json({message: "successs"});
        });

});
router.get('/educationmodel', function (req, res, next) {
    let session_email = req.session.email;
    if (session_email) {
        models.Universities.findAll()
            .then(universities => {
                universities = universities.map((row) => {
                    row = row.toJSON();
                    return row;
                });
        res.render('educationmodel',  { title: 'Express', universities:universities });
            });
    } else {
        return res.redirect('/auth/login');
    }
});

router.post('/educationmodel', async (req, res, next) => {
    let Uplace = req.body.place_of_study.trim();
    let Fplace = req.body.faculty_name.trim();
    try {
        if (Uplace && Fplace) {
            const X = await models.Universities.findOne({
                where: {place_of_study: ((Uplace) ? Uplace : '')}
            });
            console.log(`X`, X);
            if (!X) {
                models.Universities.create({
                    place_of_study: req.body.place_of_study,
                })
                    .then((Uname) => {
                        const Fname = models.Faculties.create
                        ({
                            faculty_name: req.body.faculty_name,
                            universitiesID: Uname.universitiesID
                        });
                        res.json({Uname, Fname});
                    })
            }
            else  if (X) {
                models.Faculties.findOne({
                    where:{faculty_name: ((Fplace) ? Fplace : ''),universitiesID:X.universitiesID}
                }).then((Z)=> {
                    if(!Z) {
                        models.Faculties.bulkCreate([{
                            faculty_name: req.body.faculty_name,
                            universitiesID: X.universitiesID,
                        }], {updateOnDuplicate: ['createdAt', 'updatedAt', 'facultiesID', 'faculty_name', 'universitiesID']})
                            .then((data) => {
                                res.json(data);
                            })
                            .catch((err) => {
                                console.log(`err`, err)
                            });
                    }
                    else{
                        res.send("WTF")
                    }
                } )
            }
            else{
                res.send("WTF")
            }

        } else {
            res.send(" Fields can't be empty")
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Sever Error');
    }

});


router.get('/universities', function (req, res, next) {
    models.Universities.findAll()
        .then(universities => {
            universities = universities.map((row) => {
                row = row.toJSON();
                return row;
            });
            res.render('universities', {universities: universities});
        })
        .catch((err) => {
            console.log("err", err)
        });
});


router.get('/joint', function (req, res, next) {
    let session_email = req.session.email;
    if (session_email) {
        models.Joint.findAll()
            .then(joint => {
                joint = joint.map((row) => {
                    row = row.toJSON();
                    return row;
                });
                res.render('joint', {joint: joint});
            });
    } else {
        return res.redirect('/auth/login');
    }
});

//files***************************
router.get('/files', function (req, res, next) {
        res.render('files', {title: 'Express'});
});
router.post('/files', function (req, res, next) {
    res.render('files', {title: 'Express'});
});
/*const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        console.log(req);
        callback(null, './uploads');
    },
    filename: (req, file, callback) => {
        console.log(req);
        callback(null, Date.now() + file.originalname);
    }
});

var upload = multer({storage:storage}).single('myFile');


router.post('/files', function(req,res){
    upload(req,res,function(err){
        //console.log("owen",req.file,err);
        if (err)
            return res.end("error uploading file");
        res.end("file is uploaded");
    });
});*/
//files end********************######################
function formatDate(date) {
    var d = new Date(date);
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('-');
}

function formatDateYYYYMMDD(date) {
    var d = new Date(date);
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day,].join('-');
}

module.exports = router;