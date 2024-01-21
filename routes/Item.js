import dexport from '../controllers';

export function Item(app) {
    // const controller = require('../controllers');
        const router = require('express').Router();
        router.post("/",dexport.item);
    
        app.use("/item", router);
    };