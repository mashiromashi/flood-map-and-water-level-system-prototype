const env = {
  database: "floodMap",
  username: "root",
  password: "mashiro",
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  },
  homedir: require("os").homedir + "Fileupload"
};

module.exports = env;
