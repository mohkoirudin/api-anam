import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class MPembeli extends Model<
  InferAttributes<MPembeli>,
  InferCreationAttributes<MPembeli>
> {
  declare id_pembeli: CreationOptional<number>
  declare nama_pembeli: string | null
  declare total: number
  declare days: string | null
  // declare createdAt: CreationOptional<Date>
  // declare updatedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof MPembeli {
    MPembeli.init({
      id_pembeli: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama_pembeli: {
        type: DataTypes.STRING(50)
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      days: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      }
      // createdAt: {
      //   type: DataTypes.DATE
      // },
      // updatedAt: {
      //   type: DataTypes.DATE
      // }
    }, {
      tableName: "t_pembeli",
      timestamps: false,
      sequelize
    })
    
    return MPembeli
  }
}