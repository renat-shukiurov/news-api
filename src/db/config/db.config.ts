import {registerAs} from "@nestjs/config";

export default registerAs('database', () => {
    return {
        type:"mysql",
        host:"localhost",
        port: parseInt(process.env.MYSQL_LOCAL_PORT),
        username:"root",
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities:["dist/**/*.entity{.ts,.js}"],
        synchronize:true,
        dropSchema:false,
        migrations:["dist/**/db/migrations/*{.ts,.js}"],
        migrationsTableName:"migrations_typeorm",
        migrationsRun:true,
        seeds:["dist/**/db/seeding/seeds/**/*.js"],
        factories:["dist/**/db/seeding/factories/**/*.js"]
    }
})