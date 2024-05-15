import { Post } from "./post.interface";

export interface TextPost extends Post {
  text: string;
  announcement: string;
}
