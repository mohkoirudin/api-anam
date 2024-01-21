import type { Sequelize, Model } from 'sequelize'
import { MJasa } from './MJasa'
import { MOrder } from './MOrder'
import { MItem } from './MItem'
import { MBelanja } from './MBelanja'
import { MUser } from './MUser'
import { MPembeli } from './MPembeli'

export {
  MJasa,
  MOrder,
  MItem,
  MBelanja,
  MUser,
  MPembeli
}

export function initModels(sequelize: Sequelize) {
  MJasa.initModel(sequelize)
  MOrder.initModel(sequelize)
  MItem.initModel(sequelize)
  MBelanja.initModel(sequelize)
  MUser.initModel(sequelize)
  MPembeli.initModel(sequelize)

  return {
    MJasa,
    MOrder,
    MItem,
    MBelanja,
    MUser,
    MPembeli
  }
}