export enum ApplicationServiceURL {
  Users = 'http://localhost:3000/api/auth',
  Blog = 'http://localhost:4000/api/posts',
  Files = 'http://localhost:5000/api/files',
  Notify = 'http://localhost:6000/api',
}

export const HttpClient = {
  MaxRedirects: 5,
  Timeout: 3000
}
