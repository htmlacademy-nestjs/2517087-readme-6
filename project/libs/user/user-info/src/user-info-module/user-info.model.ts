import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AuthUser } from "@project/shared/core";
import { Document } from "mongoose";

@Schema({ collection: 'users', timestamps: true })
export class UserInfoModel extends Document implements AuthUser {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  avatarId?: string;

  @Prop()
  subscribers: string[];

  @Prop()
  registrationDate: Date;

  @Prop({ required: true })
  passwordHash: string;
}

export const UserInfoSchema = SchemaFactory.createForClass(UserInfoModel);
