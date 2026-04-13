// app/services/UserService.ts
import { User } from "../models/User";
import {
  IUserResponse,
  IUserCreateRequest,
  IUserUpdateRequest,
} from "../models/interfaces/IUserResponse";

export class UserService {
  private baseUrl = "http://localhost:8080/account";

  async loginAPI(username: string, password: string): Promise<User> {
    const res = await fetch(`${this.baseUrl}/login`, {
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

  // Mengirim data baru (POST)
  async registerAPI(payload: IUserCreateRequest): Promise<User> {
    const res = await fetch(`${this.baseUrl}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const rawData: IUserResponse = await res.json();
    return new User(rawData);
  }

  // Mengupdate data (PATCH/PUT)
  async updateUser(id: number, payload: IUserUpdateRequest): Promise<User> {
    const res = await fetch(`${this.baseUrl}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const rawData: IUserResponse = await res.json();
    return new User(rawData);
  }
}
