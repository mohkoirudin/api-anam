import dexport from '../controllers';
export function Pembeli(app){

    const router = require('express').Router();

    router.post('/',dexport.CPembeli);
    app.use('/pembeli', router);

}