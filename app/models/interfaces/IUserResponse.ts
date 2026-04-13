export interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  is_active: boolean;
  created_at: string;
  token?: string;
}

export type IUserCreateRequest = Omit<IUserResponse, "id" | "created_at"> & {
  password: string;
  username: string;
  email: string;
};

export type IUserUpdateRequest = Partial<IUserCreateRequest>;
