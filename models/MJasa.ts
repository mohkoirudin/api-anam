import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class MJasa extends Model<
  InferAttributes<MJasa>,
  InferCreationAttributes<MJasa>
> {
  declare id_jasa: CreationOptional<number>
  declare nama_jasa: string
  declare tinta: number | null
  declare kertas: number | null
  declare listrik: number | null
  declare sprepart: number | null
  declare karyawan: number | null
  declare lainnya: number | null
  declare id_itemj: number | null
  declare total_modal: number | null
  declare harga_jual: number | null
  declare id_itemj2: number | null
  declare id_itemj3: number | null
  declare id_itemj4: number | null
  declare total: number | null
  declare jumlah_bahan1: number | null
  declare jumlah_bahan2: number | null
  declare jumlah_bahan3: number | null
  declare jumlah_bahan4: number | null
  declare last_total: number | null
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof MJasa {
    MJasa.init({
      id_jasa: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nama_jasa: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      tinta: {
        type: DataTypes.INTEGER
      },
      kertas: {
        type: DataTypes.INTEGER
      },
      listrik: {
        type: DataTypes.INTEGER
      },
      sprepart: {
        type: DataTypes.INTEGER
      },
      karyawan: {
        type: DataTypes.INTEGER
      },
      lainnya: {
        type: DataTypes.INTEGER
      },
      id_itemj: {
        type: DataTypes.INTEGER
      },
      total_modal: {
        type: DataTypes.INTEGER
      },
      harga_jual: {
        type: DataTypes.INTEGER
      },
      id_itemj2: {
        type: DataTypes.INTEGER
      },
      id_itemj3: {
        type: DataTypes.INTEGER
      },
      id_itemj4: {
        type: DataTypes.INTEGER
      },
      total: {
        type: DataTypes.INTEGER
      },
      jumlah_bahan1: {
        type: DataTypes.FLOAT
      },
      jumlah_bahan2: {
        type: DataTypes.FLOAT
      },
      jumlah_bahan3: {
        type: DataTypes.FLOAT
      },
      jumlah_bahan4: {
        type: DataTypes.FLOAT
      },
      last_total: {
        type: DataTypes.DOUBLE
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      tableName: "jasa",
      sequelize
    })
    
    return MJasa
  }
}