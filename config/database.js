require("dotenv").config({ path: "../.env" });

module.exports = {
  development: {
    client: process.env.CLIENT_DB,
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      charset: "utf8",
    },
    debug: true,
    logging: true,
    //    pool: { min: 0, max: 7 }
    pool: {
      min: 0,
      max: 7,
      afterCreate: (conn, done) => {
        conn.query("SELECT NOW();", (err) => {
          if (err) {
            console.log(err); //use console.error here
          }
          done(err, conn);
        });
      },
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
  },
  production: {
    client: process.env.CLIENT_DB,
    connection: {
      host: process.env.PROD_DATABASE_HOST,
      port: process.env.PROD_DATABASE_PORT,
      user: process.env.PROD_DATABASE_USER,
      password: process.env.PROD_DATABASE_PASSWORD,
      database: process.env.PROD_DATABASE_NAME,
      charset: "utf8",
    },
    debug: true,
    logging: true,
    //    pool: { min: 0, max: 7 }
    pool: {
      min: 0,
      max: 7,
      afterCreate: (conn, done) => {
        conn.query("SELECT NOW();", (err) => {
          if (err) {
            console.log(err);
          }
          done(err, conn);
        });
      },
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations",
    },
  },
};
