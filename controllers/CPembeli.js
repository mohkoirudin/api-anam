import { MPembeli } from "../models";
async function CPembeli(req, res) {
  MPembeli.create({
    nama_pembeli: req.body.nama_pembeli,
    total: req.body.total,
  });
  res.json({
    status: 201,
    data: { nama_pembeli: req.body.nama_pembeli, total: req.body.total },
    message: "Data Berhasil dibuat",
  });
}
export default CPembeli;
