import Sequelize from 'sequelize';
import { connection } from '../connection';

const UserModel = connection.define(
  'user',
  {
    username: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gender: {
      type: Sequelize.TINYINT,
      defaultValue: 1
    },
    birthday: {
      type: Sequelize.DATE,
      defaultValue: null
    },
    avatarImage: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    avatarId: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    fullname: {
      type: Sequelize.TEXT,
      defaultValue: null
    },
    phone: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    email: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    IDCardNumber: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    university: {
      type: Sequelize.TEXT,
      defaultValue: null
    },
    IDNumber: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    role: {
      type: Sequelize.TINYINT,
      defaultValue: 0
    },
    job: {
      type: Sequelize.TEXT,
      defaultValue: null
    },
    isTeacher: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    isAccepted: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  },
  {
    tableName: 'user',
    timestamps: false
  }
);

export { UserModel };
