// import { User } from './models/User';
import http from 'http'
import db from './db';
import { all } from './routes';
import { initModels } from './models';
// import { all } from 'axios';
// import {createe} from './controllers/index.js'
const express = require('express');
const app = express();
// const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const syncc = async() => {
  try {
    await db.sync();
    console.log("sukses Syncron");
  } catch (error) {
    error;
  }
}
syncc();

initModels(db);

// app.use("/user", User);


// router.post("/", createe);

// app.use("/user", router);
// import { User } from './routes';
// import { User } from './routes';
all(app);
// User(app);



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})

// async function run() {
//   initModels(db)
//   const hostname = process.env.HOSTNAME || '127.0.0.1'
//   const port = parseInt(process.env.PORT || '3000')
  
//   const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('Hello World')
//   })
  
//   server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`)
//   })
// }

// run()