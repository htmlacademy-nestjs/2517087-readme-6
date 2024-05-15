import { plainToClass } from "class-transformer";
import { FileVaultConfiguration } from "./file-vault/file-vault.env";
import { DefaultPort, ENVIRONMENTS } from "./file-vault/file-vault.const";
import { ConfigType, registerAs } from '@nestjs/config';
import { RADIX_DECIMAIL } from "@project/shared/core";

type Environment = typeof ENVIRONMENTS[number];

export interface FileVaultConfig {
  environment: string;
  port: number;
  uploadDirectory: string;
  db: {
    host: string;
    port: number;
    user: string;
    name: string;
    password: string;
    authBase: string;
  }
}

async function getFileVaultConfig(): Promise<FileVaultConfiguration> {
  const config = plainToClass(FileVaultConfiguration, {
    environment: process.env.NODE_ENV as Environment,
    port: process.env.PORT ? parseInt(process.env.PORT, RADIX_DECIMAIL) : DefaultPort.File,
    uploadDirectory: process.env.UPLOAD_DIRECTORY_PATH,
    db: {
      host: process.env.MONGO_HOST,
      port: parseInt(process.env.MONGO_PORT ?? DefaultPort.Mongo.toString(), RADIX_DECIMAIL),
      name: process.env.MONGO_DB,
      user: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      authBase: process.env.MONGO_AUTH_BASE,
    }
  });

  await config.validate();

  return config;
}

export default registerAs('file-vault', async (): Promise<ConfigType<typeof getFileVaultConfig>> => {
  return getFileVaultConfig();
})
