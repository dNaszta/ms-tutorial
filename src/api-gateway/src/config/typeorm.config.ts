import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: 'example',
  database: 'user',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true // not recommended in live
}