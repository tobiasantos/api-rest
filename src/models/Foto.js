import Sequelize, { Model } from "sequelize";
import appConfig from "../config/app";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo [originalName] não pode ficar vazio",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo [fileName] não pode ficar vazio",
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}:81/images/${this.getDataValue("filename")}`;
          },
        },
      },
      {
        sequelize,
        tableName: "fotos",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
}

// caso fosse fazer a mesma coisa, mas no Model Aluno:
// this.hasOne(models.Foto, { foreignKey: "aluno_id" })
// this.hasMany(models.Foto, { foreignKey: "aluno_id" })
