import { MUser } from "../models";
async function CUser(req,res){
    // Usern();
const awal = await MUser.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
    // id: req.body.id
});
res.json("berhasil");
     
   };
   export default CUser;