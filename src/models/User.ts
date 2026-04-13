import { IUserResponse } from "@/src/types/IUserResponse";

export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public isActive: boolean;
  public createdAt: Date;
  private token: string | "";

  constructor(data: IUserResponse) {
    this.id = data.id;
    this.firstName = data.name.split(" ")[0];
    this.lastName = data.name.split(" ")[1] || "";
    this.email = data.email;
    this.isActive = data.is_active;
    this.createdAt = new Date(data.created_at);
    this.token = data.token || "";
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get tokenValue(): string {
    return this.token;
  }

  get joinedDate(): string {
    return new Intl.DateTimeFormat("id-ID", {
      dateStyle: "long",
    }).format(this.createdAt);
  }
}

export default User;
