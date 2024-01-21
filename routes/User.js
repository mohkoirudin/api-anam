// import user from '../controllers/User';
import dexport from '../controllers';

export function User(app) {
// const {user} = require('../controllers');
// const {user} = require('../controllers/User')

    const router = require('express').Router();
    router.post("/",dexport.CUser)

    app.use("/user", router);
};