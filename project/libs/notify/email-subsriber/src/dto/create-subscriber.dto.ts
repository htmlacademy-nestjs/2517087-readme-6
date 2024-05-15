import { IsEmail, IsNotEmpty } from 'class-validator';
import { EmailSubscriberValidateMessage } from '../email-subscriber.constant';

export class CreateSubscriberDto {
  @IsEmail({}, { message: EmailSubscriberValidateMessage.EmailNotValid })
  public email: string;

  @IsNotEmpty({ message: EmailSubscriberValidateMessage.FirstNameIsEmpty })
  public firstname: string;

  @IsNotEmpty({ message: EmailSubscriberValidateMessage.LastNameIsEmpty })
  public lastname: string;

  @IsNotEmpty({ message: EmailSubscriberValidateMessage.UserIdIeEmpty })
  public id: string;
}
