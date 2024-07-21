import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface DrawerStore {
  isMinimized: boolean;
  toggle: () => void;
}

//Default;

// export const useDrawer = create<DrawerStore>((set) => ({
//   isMinimized: true,
//   toggle: () => set((state) => ({ isMinimized: !state.isMinimized })),
// }));

//With state store

export const useDrawer = create(
  persist<DrawerStore>(
    (set) => ({
      isMinimized: true,
      toggle: () => set((state: any) => ({ isMinimized: !state.isMinimized })),
    }),
    {
      name: "drawer-storage", // unique name for the storage
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
