import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class MOrder extends Model<
  InferAttributes<MOrder>,
  InferCreationAttributes<MOrder>
> {
  declare id_order: CreationOptional<number>
  declare jumlah: number
  declare tanggal_order: string | null
  declare nama_produk_order: string | null
  declare id_produk: number | null
  declare harga: number | null
  declare id_pembeli: number | null
  declare harga_modal: number | null
  declare lunas: number | null
  declare tanggal_lunas: string | null
  declare catatan_order: string | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof MOrder {
    MOrder.init({
      id_order: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      jumlah: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      tanggal_order: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      nama_produk_order: {
        type: DataTypes.STRING(50)
      },
      id_produk: {
        type: DataTypes.BIGINT
      },
      harga: {
        type: DataTypes.INTEGER
      },
      id_pembeli: {
        type: DataTypes.INTEGER
      },
      harga_modal: {
        type: DataTypes.INTEGER
      },
      lunas: {
        type: DataTypes.INTEGER
      },
      tanggal_lunas: {
        type: DataTypes.DATEONLY
      },
      catatan_order: {
        type: DataTypes.STRING(100)
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      tableName: "t_order",
      sequelize
    })
    
    return MOrder
  }
}