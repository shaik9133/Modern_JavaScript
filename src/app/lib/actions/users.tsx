"use server";

import { revalidatePath } from "next/cache";

export async function getUsers() {
  try {
    let response = await fetch("http://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
  } catch(e: any) {
    return {
        error: e.message,
    };
  }
}
