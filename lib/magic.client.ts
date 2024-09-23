import { Magic } from "magic-sdk";

const MAGIC_API_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY;

const createMagic = () => {
  return typeof window !== "undefined" && new Magic(MAGIC_API_KEY as string);
};

export const magic = createMagic();
