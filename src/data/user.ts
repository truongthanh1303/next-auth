import { db } from "@/lib/db";

export function getUserByEmail(email: string) {
  try {
    return db.user.findUnique({
      where: { email },
    });
  } catch {
    return null;
  }
}

export function getUserById(id: string) {
  try {
    return db.user.findUnique({
      where: { id },
    });
  } catch {
    return null;
  }
}