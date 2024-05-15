import { IsString, IsNumber, IsOptional, ValidateNested, IsObject, IsNotEmptyObject, IsDefined, validateOrReject } from 'class-validator';
import { EnvValidationMessage } from './file-vault.messages';
import { Type } from 'class-transformer';

export class FileVaultDbConfiguration {
  @IsString({ message: EnvValidationMessage.DbHostRequired })
  host: string;

  @IsNumber({}, { message: EnvValidationMessage.DbPortRequired })
  port: number;

  @IsString({ message: EnvValidationMessage.DbAuthBaseRequired })
  authBase: string;

  @IsString({ message: EnvValidationMessage.DbUserRequired })
  user: string;

  @IsString({ message: EnvValidationMessage.DbNameRequired })
  name: string;

  @IsString({ message: EnvValidationMessage.DbPasswordRequired })
  password: string;
}

export class FileVaultConfiguration {
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => FileVaultDbConfiguration)
  db: FileVaultDbConfiguration;

  @IsNumber({}, { message: EnvValidationMessage.PortRequired })
  @IsOptional()
  port: number;

  @IsString({ message: EnvValidationMessage.EnvironmentRequired })
  environment: string;

  @IsString({ message: EnvValidationMessage.UploadDirectoryRequired })
  uploadDirectory: string;

  public async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
