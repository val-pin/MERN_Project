export type PostType = {
  name: string;
  date: Date;
  _id: string;
  picture: string;
  comment: string;
  likes: number;
};

export type AllPostsResponseType = {
  message: string;
  number: number;
  allPosts: PostType[];
};

export type SinglePostResponseType = {
  dateOfResponse: string;
  message: string;
  requestedPost: PostType;
};

export type User = {
  name: string;
  email: string;
  profilePic: string;
  posts: PostType[];
};
