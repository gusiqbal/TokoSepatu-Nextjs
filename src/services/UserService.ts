import { User } from "@/src/models/User";
import {
  IUserResponse,
  IUserCreateRequest,
  IUserUpdateRequest,
  IRegisterResponse,
} from "@/src/types/IUserResponse";

export class UserService {
  private BASE_URL: string | undefined = process.env.DEV_API_URL;
  private REGISTER_ENDPOINT: string = `${this.BASE_URL}accounts`;
  private PROFILE_BASE_ENDPOINT: string = `${this.BASE_URL}profile`;

  async getUser(token: string): Promise<User> {
    const res = await fetch(`${this.PROFILE_BASE_ENDPOINT}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed fetch user");
    const rawData: IUserResponse = await res.json();

    return new User(rawData);
  }

  async registerUser(payload: IUserCreateRequest): Promise<IRegisterResponse> {
    const res = await fetch(this.REGISTER_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Registrasi gagal");

    const rawData: IRegisterResponse = await res.json();
    return rawData;
  }

  async updateUser(id: number, payload: IUserUpdateRequest): Promise<User> {
    const res = await fetch(`${this.PROFILE_BASE_ENDPOINT}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Update gagal");

    const rawData: IUserResponse = await res.json();
    return new User(rawData);
  }
}
