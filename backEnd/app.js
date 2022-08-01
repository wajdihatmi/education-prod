// ***1***importation des modules****
// importer module express
const express = require("express");
// import moduel body-parse
const bodyParser = require('body-parser');
// const multer = require('multer');
var bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const axios = require('axios');
// const { Console } = require("console");
// import module mongosse
const mongoose = require('mongoose');
// conction mongoose avec DATAbASE name educationDB
mongoose.connect('mongodb://localhost:27017/educationDB');
// import User/Course/Evente/Teacher model
const User = require("./models/user");
const Course = require("./models/course");
const Evente = require("./models/evente");
const Teacher = require("./models/teacher");
// const MIME_TYPE = {
//     'image/png': 'png',
//     'image/jpeg': 'jpg',
//     'image/jpg': 'jpg'
// }
// const storageConfig = multer.diskStorage({
//     // destination: pour engistrement file
//     destination: (req, file, cb) => {
//         const isValid = MIME_TYPE[file.mimetype];
//         let error = new Error("Mime type is invalid");
//         if (isValid) {
//             error = nul;
//         }
//         cb(null, 'backend/images')
//     },
//     // fileName
//     filename: (req, file, cb) => {
//         // const name = file.originalname.toLowerCase().split(' ').join('-'); 
//         // = es2m ficher.miniscule.kollespace.tetbadel-(6)
//         const name = file.originalname.toLowerCase().split(' ').join('-');
//         // extension: nawa3 ficher : Mine taybe
//         const extension = MIME_TYPE[file.mimetype];
//         const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
//             extension;
//         // cb:call back
//         cb(null, imgName);
//     }
// });

// ***2***creat app backend name app
const app = express();


// **3**la configuration
// BODYparser configuration to send response to FE in json format
app.use(bodyParser.json());
// BODYparser configuration to send received Object from FE
// pour acceder au body du request
app.use(bodyParser.urlencoded({ extended: true }));
// configration secrityy
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
});
app.use('/images', express.static(path.join('backEnd/images')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storageConfig = multer.diskStorage({
    // destination: pour engistrement file
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = nul;
        }
        cb(null, 'backEnd/images')
    },
    // fileName
    filename: (req, file, cb) => {
        // const name = file.originalname.toLowerCase().split(' ').join('-'); 
        // = es2m ficher.miniscule.kollespace.tetbadel-(6)
        const name = file.originalname.toLowerCase().split(' ').join('-');
        // extension: nawa3 ficher : Mine taybe
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        // cb:call back
        cb(null, imgName);
    }
});

// traiment Business logique
// app.methode(adress)==app.methode("/path", (req, res)=> {
//   instruction 
//  })
// fake TABLEAU
let allCourses = [
    { id: 1, name: "erwa", prix: 50, description: 14, place: 8 },
    { id: 2, name: "taytayo", prix: 150, description: 17, place: 44 },
    { id: 3, name: "sasoko", prix: 500, description: 55, place: 77 },


];
let allEvents = [
    { id: 1, name: "erwa", description: "fort", date: 7, place: 7, prix: 4774 },
    { id: 2, name: "diiida", description: "faible", date: 8, place: 7, prix: 1144 },
    { id: 3, name: "hach", description: "moyen", date: 11, place: 7, prix: 54 },
    { id: 4, name: "balti", description: "sup", date: 21, place: 1, prix: 5 },



];
let allTeacher = [
    { id: 1, name: "erwa", age: 50, matiere: "info" },
    { id: 2, name: "khaled", age: 70, matiere: "physique" },
    { id: 3, name: "adel", age: 55, matiere: "matematique" },



];
// //////G**E**T
app.get("/courses", (req, res) => {

    Course.find((err, docs) => {

        if (err) {
            console.log('haloo erreer courses DB', err)
        } else {
            res.json({ a: docs })
        }
    })

})
app.get("/events", (req, res) => {

    Evente.find((err, docs) => {

        if (err) {
            console.log('haloo erreer eventes DB', err)
        } else {
            res.json({ a: docs, message: 'HY allEvents' })
        }
    })

})
app.get("/teachers", (req, res) => {

        Teacher.find((err, docs) => {

            if (err) {
                console.log('haloo erreer eventes DB', err)
            } else {
                res.json({ a: docs, message: 'HY allTeacher' })
            }
        })
    })
    // ///***G *E**T ** BY ***ID
app.get("/courses/:valeur", (req, res) => {
    let CC = req.params.valeur;
    Course.findOne({ _id: CC }).then((doc) => {
        console.log('hiii doc', doc);
        res.json({ findCourse: doc })

    })


})
app.get("/events/:valeur", (req, res) => {
    let EE = req.params.valeur;

    Evente.findOne({ _id: EE }).then((doc) => {
        console.log('hiii doc', doc);
        res.json({ findEvent: doc })
    })


})
app.get("/teachers/:valeur", (req, res) => {
        let TT = req.params.valeur;

        Teacher.findOne({ _id: TT }).then((doc) => {
            console.log('hiii doc', doc);
            res.json({ findTeacher: doc })
        })

        // res.json({ findTeacher: doc })
    })
    // ///***D *E**L**I**T ** BY ***ID
app.delete("/courses/:valeur", (req, res) => {
    console.log('here in delte courses', req.params.valeur)
    let CC = req.params.valeur;
    Course.deleteOne({ _id: CC }).then((response) => {
        console.log('hiii response', response);
        if (response.deletedCount == 1) {
            res.json({ message: "delte with success Course" });
        }
    })


})
app.delete("/events/:valeur", (req, res) => {
    console.log('here in delte evente', req.params.valeur)
    let EE = req.params.valeur;
    Evente.deleteOne({ _id: EE }).then((response) => {
        console.log('hiii response', response);
        if (response.deletedCount == 1) {
            res.json({ message: "delte with success Evente" });
        }
    })


})
app.delete("/teachers/:valeur", (req, res) => {
    console.log('here in delte teacher', req.params.valeur)
    let TT = req.params.valeur;
    Teacher.deleteOne({ _id: TT }).then((response) => {
        console.log('hiii response', response);
        if (response.deletedCount == 1) {
            res.json({ message: "delte with success Teacher " });
        }
    })


})

// ///***A *D****D****  
app.post("/courses", (req, res) => {
    console.log('here in ADD ')
    console.log('here course object ', req.body)
        // allCourses.push(req.body);
        // res.json({
        //     message: "course add success"
        // })
    let course = new Course({
        name: req.body.name,
        description: req.body.description,
        prix: req.body.prix,
        place: req.body.place
    })
    course.save((err, doc) => {
        if (err) {
            console.log('Ereer with DB Course', err);
        } else {
            res.json({
                message: "Evente with succes"
            });

        }

    });

});
app.post("/events", (req, res) => {
    console.log('here in ADD ')
    console.log('here evente object ', req.body)
        // allEvents.push(req.body);
        // res.json({
        //     message: "event add success"
        // })
    let evente = new Evente({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,


        place: req.body.place,
        prix: req.body.prix,

    })
    evente.save((err, doc) => {

        if (err) {
            console.log('Ereer with DB Evente', err);
        } else {
            res.json({
                message: "Evente with succes"
            });

        }
    });

});
app.post("/teachers", multer({ storage: storageConfig }).single('img'), (req, res) => {
    let url = req.protocol + '://' + req.get('host');
    console.log('here in ADD ')
    console.log('here teacher object ', req.body)
        // allTeacher.push(req.body);
        // res.json({
        //     message: "teacher add success"
        // })
    let teacher = new Teacher({
        name: req.body.name,
        age: req.body.age,
        matiere: req.body.matiere,
        img: url + '/images/' + req.file.filename

    })
    teacher.save((err, doc) => {
        if (err) {
            console.log('Ereer with DB Teacher ', err);
        } else {
            res.json({
                message: "Evente with succes"
            });

        }

    });

});
// ///***E*D****I**** T**
app.put("/courses/:valeur", (req, res) => {
    console.log('here in edit ID', req.params.valeur)
    console.log('here in edit objet', req.body)
    Course.updateOne({ _id: req.params.valeur }, req.body).then(
        (response) => {
            console.log('hyy response update Course', response)
            res.json({
                message: "courses edit success"
            })

        }
    )


})
app.put("/events/:valeur", (req, res) => {
    console.log('here in edit ID', req.params.valeur)
    console.log('here in edit objet', req.body)
    Evente.updateOne({ _id: req.params.valeur }, req.body).then(
        (response) => {
            console.log('hyy response update Evente', response)
            res.json({
                message: " events edit success"
            })
        }
    )

    // res.json({
    //     message: " events edit success"
    // })
})
app.put("/teachers/:valeur", (req, res) => {
        console.log('here in edit ID', req.params.valeur)
        console.log('here in edit objet', req.body)
        Teacher.updateOne({ _id: req.params.valeur }, req.body).then(

                (response) => {
                    console.log('hyy response update Teacher', response)
                    res.json({
                        message: "teacher edit success"
                    })
                }
            )
            // res.json({
            //     message: "teacher edit success"
            // })
    })
    // ****U**S**E**R
app.post('/users/signup', (req, res) => {

    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
        console.log('here into signup', req.body);
        let user = new User({
            FirstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            pwd: cryptedPwd,
            cin: req.body.cin,
            tel: req.body.tel,

        });

        user.save((err, doc) => {
            if (err) {
                console.log('save sigynp err', err)
                if (err.errors.cin.message) {
                    res.json({
                        message: "0",

                    })

                }
            } else {
                res.json({
                    message: "1",
                    user: doc
                })

            }

        })
    })



})
app.post("/users/login", (req, res) => {
    console.log('here into login', req.body);
    User.findOne({ cin: req.body.cin }).then((doc) => {
        console.log('hz doc', doc)
        if (!doc) {
            res.json({ message: "0" });

        }
        return bcrypt.compare(req.body.pwd, doc.pwd);

    }).then((pwdResult) => {

        console.log('pwdResult', pwdResult);
        if (!pwdResult) {
            res.json({ message: "1" });

        }
        User.findOne({ cin: req.body.cin }).then(
            (finanlResult) => {
                let userTOsend = {
                    FN: finanlResult.FirstName,

                    LN: finanlResult.lastName,

                };
                res.json({
                    message: "2",
                    user: userTOsend,
                });

            })


    })

})
app.post("/serch", (req, res) => {
    console.log('here into serch', req.body);

    let name = req.body.name;

    let kyy = "ae8fb5a99cmshd94d67c08db8f6ep17ccb3jsna0189e67ffbb";
    // let appurl = "https://golf-course-finder.p.rapidapi.com/courses"
    // axios.get(appurl).then(function(response) {
    //     console.log(response.data);
    // }).catch(function(error) {
    //     console.error("hy error", error);
    // });
    const options = {
        method: 'GET',
        url: 'https://golf-course-finder.p.rapidapi.com/courses',
        params: { radius: '10', lat: '36.56910381018662', lng: '-121.95035631683683' },
        headers: {
            'X-RapidAPI-Key': kyy,
            'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com'
        }
    };

    axios.request(options).then(function(response) {
        console.log("new api", response.data);
    }).catch(function(error) {
        console.error(error);
    });


})
module.exports = app;