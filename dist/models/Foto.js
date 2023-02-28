"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _app = require('../config/app'); var _app2 = _interopRequireDefault(_app);

 class Foto extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo [originalName] não pode ficar vazio",
            },
          },
        },
        filename: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo [fileName] não pode ficar vazio",
            },
          },
        },
        url: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `${_app2.default.url}:81/images/${this.getDataValue(
              "filename"
            )}`;
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
} exports.default = Foto;

// caso fosse fazer a mesma coisa, mas no Model Aluno:
// this.hasOne(models.Foto, { foreignKey: "aluno_id" })
// this.hasMany(models.Foto, { foreignKey: "aluno_id" })
