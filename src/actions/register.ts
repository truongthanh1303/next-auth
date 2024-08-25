'use server';

import { db } from '@/lib/db';
import { RegisterSchema } from '@/schemas';
import { hash } from 'bcrypt';
import * as z from 'zod';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields', errors: validatedFields.error.errors };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: 'Email already in use!' };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  // TODO: Send email verification

  return { success: 'User created!' };
};