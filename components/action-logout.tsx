'use client'
import deleteCookies from "@/utils/cookies";
import { LogOut } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export default function ActionLogout() {
  const router = useRouter()
  return (
    <form
      action={async () => {
        await deleteCookies();
        router.push("/auth", { scroll: false });
      }}
    >
      <button className="flex" type="submit">
        <LogOut className="w-3 h-3 my-auto" />{" "}
        <div className="my-auto mx-1">Logout</div>
      </button>
    </form>
  );
}
