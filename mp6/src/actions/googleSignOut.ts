"use server";
import { signOut } from "@/auth";

export async function googleSignOut() {
    await signOut();
}