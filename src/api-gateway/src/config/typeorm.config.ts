import { ConnectionOptions } from 'typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: ConnectionOptions = {
  type: process.env.RDS_CONNECTION_TYPE || dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  password: process.env.RDS_PASSWORD || dbConfig.password,
  database: process.env.RDS_DB_NAME || dbConfig.database,

  /*
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'example',
  database: 'user',
  */
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,

  migrationsRun: true,
  logging: true,
  logger: 'file',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
}