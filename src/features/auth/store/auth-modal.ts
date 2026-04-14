import { create, StateCreator } from "zustand";

type AuthModalState = {
  isOpen: boolean;
  mode: "login" | "register";
  open: (mode?: "login" | "register") => void;
  close: () => void;
  switchMode: () => void;
};

const slice: StateCreator<AuthModalState> = (set, get) => ({
  isOpen: false,
  mode: "login",
  open: (mode = "login") => set({ isOpen: true, mode }),
  close: () => set({ isOpen: false }),
  switchMode: () =>
    set({ mode: get().mode === "login" ? "register" : "login" }),
});

export const useAuthModal = create(slice);
