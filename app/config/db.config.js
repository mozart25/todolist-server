module.exports = {
    HOST: "us-cdbr-east-03.cleardb.com",
    USER: "bef6e9663d3d82",
    PASSWORD: "01ba2476",
    DB: "heroku_b137e91437c2cbf",
    dialect: "mysql",
    timezone: '+09:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};