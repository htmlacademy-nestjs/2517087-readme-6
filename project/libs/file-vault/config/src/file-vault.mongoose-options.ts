import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

import { getMongoConnectionString } from '@project/shared/helpers';

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          username: config.get<string>('file-vault.db.user'),
          password: config.get<string>('file-vault.db.password'),
          host: config.get<string>('file-vault.db.host'),
          port: config.get<string>('file-vault.db.port'),
          authDatabase: config.get<string>('file-vault.db.authBase'),
          databaseName: config.get<string>('file-vault.db.name'),
        })
      }
    },
    inject: [ConfigService]
  }
}
