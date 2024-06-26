"use client";
import { logoutAction } from "@/app/data/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit">logout</button>
    </form>
  );
}
