import {
  CreationOptional,
  DataTypes,
  InferCreationAttributes,
  InferAttributes,
  Model,
  Sequelize
} from 'sequelize'

export class MUser extends Model<
  InferAttributes<MUser>,
  InferCreationAttributes<MUser>
> {
  declare username: string
  declare password: string
  declare role: number
  declare id: CreationOptional<number>
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  
  static initModel(sequelize: Sequelize): typeof MUser {
    MUser.init({
      username: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      role: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      tableName: "user",
      sequelize
    })
    
    return MUser
  }
}