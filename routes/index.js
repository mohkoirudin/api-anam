import { User } from './User';
import { Item } from './Item';
import { Pembeli } from './Pembeli';
// const Router = require('express').Router();
export function all(app){
    User(app);
    Item(app);
    Pembeli(app);
    
    // Belanja(app);
    // Jasa(app);
    // Order(app);
    // Pembeli(app);
}

// export {User};