export interface User {
  id?: string;
  email: string;
  firstname: string;
  lastname: string;
  avatarId?: string;
  subscribers: string[];
  registrationDate: Date;
}
