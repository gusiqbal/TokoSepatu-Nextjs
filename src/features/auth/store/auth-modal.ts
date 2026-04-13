import { create, StateCreator } from "zustand";

type AuthModalState = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const slice: StateCreator<AuthModalState> = (set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
});

export const useAuthModal = create(slice);
