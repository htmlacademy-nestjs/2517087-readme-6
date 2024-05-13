export enum ApplicationServiceURL {
  Users = 'http://localhost:3000/api/auth',
  Blog = 'http://localhost:5000/api/posts',
  Notifies = 'http://localhost:4000/api/',
  Files = 'http://localhost:6000/api/files/',
}

export const HTTP_CLIENT_MAX_REDIRECTS = 5;
export const HTTP_CLIENT_TIMEOUT = 3000;
