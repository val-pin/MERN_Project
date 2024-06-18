export type PostType = {
  name: string;
  date: Date;
  _id: string;
  picture: string;
  comment: string;
};

export type AllPostsResType = {
  message: string;
  number: number;
  allPosts: PostType[];
};
