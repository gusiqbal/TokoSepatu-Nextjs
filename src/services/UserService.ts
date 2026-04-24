import { User } from "@/src/models/User";
import {
  IUserResponse,
  IUserCreateRequest,
  IUserUpdateRequest,
  IRegisterResponse,
} from "@/src/types/IUserResponse";

export class UserService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/accounts`
    : "http://localhost:8080/account";

  private REGISTER_ENDPOINT: string = `http://localhost:8080/accounts`;
  private LOGIN_ENDPOINT: string = `http://localhost:8080/sessions`;

  async loginAPI(username: string, password: string): Promise<User> {
    const res = await fetch(this.LOGIN_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) throw new Error("Login gagal");

    const rawData: IUserResponse = await res.json();
    return new User(rawData);
  }

  async getUser(id: number): Promise<User> {
    const res = await fetch(`${this.baseUrl}/${id}`);
    if (!res.ok) throw new Error("User tidak ditemukan");

    const rawData: IUserResponse = await res.json();
    return new User(rawData);
  }

  async registerAPI(payload: IUserCreateRequest): Promise<IRegisterResponse> {
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
    const res = await fetch(`${this.baseUrl}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Update gagal");

    const rawData: IUserResponse = await res.json();
    return new User(rawData);
  }
}
