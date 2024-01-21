import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class MBelanja extends Model<
  InferAttributes<MBelanja>,
  InferCreationAttributes<MBelanja>
> {
  declare id_belanja: CreationOptional<number>
  declare tanggal_belanja: string | null
  declare nama_item: string
  declare id_item: number
  declare harga_item: number | null
  declare tempat_belanja: string | null
  declare catatan: string | null
  declare harga_jual: number | null
  declare jumlah_pcs: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof MBelanja {
    MBelanja.init({
      id_belanja: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tanggal_belanja: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      },
      nama_item: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      id_item: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      harga_item: {
        type: DataTypes.INTEGER
      },
      tempat_belanja: {
        type: DataTypes.STRING(50)
      },
      catatan: {
        type: DataTypes.STRING(50)
      },
      harga_jual: {
        type: DataTypes.INTEGER
      },
      jumlah_pcs: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      tableName: "belanja",
      sequelize
    })
    
    return MBelanja
  }
}