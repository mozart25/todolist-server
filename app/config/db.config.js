module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "qwe123,.",
    DB: "todolist",
    dialect: "mysql",
    timezone: '+09:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};