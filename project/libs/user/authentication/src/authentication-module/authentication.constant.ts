export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged.',
  LoggedError: 'Password or Login is wrong.',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created.',
  UserPasswordWrong: 'User password wrong',
  JwtAuthSuccess: 'Successful user auth with jwt',
  JwtAuthError: 'Error user auth with jwt',
  GetNewTokens: 'Get a new AT,RT',
  TokenCreatedError: 'Error creating user token',
  BadMongoIdError: 'Bad entity mongo id',
  GettingUsersById: 'Getting list of users by id',
  GettingPublishersList: 'Getting list publishers current user subscribed to',
} as const;

export const ParamDescription = {
  UserId: 'User id',
} as const;

export const AuthenticationValidateMessage = {
  EmailNotValid: 'The email is not valid',
} as const;

export const NameLength = {
  Min: 3,
  Max: 50
};

export const PasswordLength = {
  Min: 6,
  Max: 12
};

export const AVATAR_MAX_SIZE = 500000;

export const AVATAR_AVAILABLE_TYPES = /(jpe?g|png)/;
