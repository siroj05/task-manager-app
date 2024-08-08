import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function FormLogin() {
  return (
    <div>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" name="username" placeholder="Username" />
      </div>
      <div className="my-1 mb-6">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" name="password" placeholder="Password" />
      </div>
      <Button className="w-full bg-indigo-600 hover:bg-indigo-500">Sign In</Button>
    </div>
  );
}
