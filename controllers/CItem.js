import { MItem } from "../models";
async function CItem(req,res){
    // Usern();
try {
    const awal = await MItem.create({

        nama_item : req.body.nama_item,
        harga_pembelian: req.body.harga_pembelian,
        harga_jual: req.body.harga_jual,
        stock: req.body.stock,
        catatan: req.body.catatan,
        harga_per_pcs: req.body.harga_per_pcs,
        jumlah_pcs: req.body.jumlah_pcs
    });
    res.json("Item berhasil dibuat");
         
       
} catch (error) {
    res.json(error);
}
};
   export default CItem;