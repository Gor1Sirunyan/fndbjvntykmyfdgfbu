const config = require('../config/config.json').development;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.CV = require("./cv")(sequelize, Sequelize);
db.Education = require("./education")(sequelize,Sequelize);
db.Dashboard = require("./dashboard")(sequelize,Sequelize);
db.Experience = require("./experience")(sequelize,Sequelize);
db.Universities = require("./universities")(sequelize,Sequelize);
db.Faculties = require("./faculties")(sequelize,Sequelize);
db.Joint = require("./joint")(sequelize,Sequelize);
/*db.MyModel = require("./files")(sequelize,Sequelize);*/
module.exports = db;











