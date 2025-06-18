export type UserTypes = {
  id: number;
  email: string;
  password: string;
};

export type RequestWithUser = Request & {
  user: UserTypes;
};
