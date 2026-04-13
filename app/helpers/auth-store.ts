import { create, StateCreator } from "zustand"
import User from "../models/User";

type AuthStoreState = {
    User: User | null;
    IsloggedIn: boolean;
    token: string | null;

    login: (User: User, token: string) => void;
    logout: () => void;
}

const slice: StateCreator<AuthStoreState> = (set) => ({
    User: null,
    IsloggedIn: false,
    token: null,
    login: (User, token) => set({ User, IsloggedIn: true, token }),
    logout: () => set({ User: null, IsloggedIn: false, token: null }),
});

export const useAuthStore = create<AuthStoreState>(slice);