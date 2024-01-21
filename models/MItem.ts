import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class MItem extends Model<
  InferAttributes<MItem>,
  InferCreationAttributes<MItem>
> {
  declare id_item: CreationOptional<number>
  declare nama_item: string
  declare harga_pembelian: number
  declare tanggal_pembelian: string
  declare harga_jual: number
  declare stock: number | null
  declare catatan: string | null
  declare harga_per_pcs: number
  declare pemakaian: number | null
  declare jumlah_pcs: number | null
  // declare createdAt: CreationOptional<Date>
  // declare updatedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof MItem {
    MItem.init({
      id_item: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama_item: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      harga_pembelian: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tanggal_pembelian: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      harga_jual: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      stock: {
        type: DataTypes.FLOAT
      },
      catatan: {
        type: DataTypes.STRING(128),
        defaultValue: "",
      },
      harga_per_pcs: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      pemakaian: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        
      },
      jumlah_pcs: {
        type: DataTypes.INTEGER
      }
      // createdAt: {
      //   type: DataTypes.DATE
      // },
      // updatedAt: {
      //   type: DataTypes.DATE
      // }
    }, {
      tableName: "t_item",
      sequelize,
      createdAt: false,
      updatedAt: false
    })
    
    return MItem
  }
}