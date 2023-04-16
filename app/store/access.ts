import { create } from "zustand";
import { persist } from "zustand/middleware";
import { queryMeta } from "../utils";

export interface AccessControlStore {
  accessCode: string;
  token: string;
  XAccessToken: string;

  updateCode: (_: string) => void;
  updateToken: (_: string) => void;
  updateXAccessToken: (_: string) => void;
  enabledAccessControl: () => boolean;
}

export const ACCESS_KEY = "access-control";

export const useAccessStore = create<AccessControlStore>()(
  persist(
    (set, get) => ({
      token: "",
      accessCode: "",
      XAccessToken: "",
      enabledAccessControl() {
        return queryMeta("access") === "enabled";
      },
      updateCode(code: string) {
        set((state) => ({ accessCode: code }));
      },
      updateToken(token: string) {
        set((state) => ({ token }));
      },
      updateXAccessToken(token: string) {
        set((state) => ({ XAccessToken: token }));
      },
    }),
    {
      name: ACCESS_KEY,
      version: 1,
    },
  ),
);
