import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'user-db',
  port: 3306,
  username: 'root',
  password: 'example',
  database: 'user',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true // not recommended in live
}