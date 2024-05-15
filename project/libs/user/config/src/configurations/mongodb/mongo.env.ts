import { IsString, IsNumber, Max, Min, IsOptional, validateOrReject } from 'class-validator';

import { EnvValidationMessage } from './mongo.messages';
import { DEFAULT_MONGO_PORT, PortRange } from './mongo.const';

export class MongoConfiguration {
  @IsString({ message: EnvValidationMessage.DBNameRequired })
  public name: string;

  @IsString({ message: EnvValidationMessage.DBHostRequired })
  public host: string;

  @IsNumber({}, { message: EnvValidationMessage.DBPortRequired })
  @Min(PortRange.Min)
  @Max(PortRange.Max)
  @IsOptional()
  public port: number = DEFAULT_MONGO_PORT;

  @IsNumber({}, { message: EnvValidationMessage.DBPortRequired })
  @Min(PortRange.Min)
  @Max(PortRange.Max)
  @IsOptional()
  public externalPort: number = DEFAULT_MONGO_PORT;

  @IsString({ message: EnvValidationMessage.DBUserRequired })
  public user: string;

  @IsString({ message: EnvValidationMessage.DBPasswordRequired })
  public password: string;

  @IsString({ message: EnvValidationMessage.DBBaseAuthRequired })
  public authBase: string;

  public async validate(): Promise<void> {
    await validateOrReject(this);
  }
}
