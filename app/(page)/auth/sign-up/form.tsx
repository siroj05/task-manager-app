import ButtonAct from "@/components/button-action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function FormRegis() {
  return (
    <div>
      <div>
        <Label htmlFor="fullname">Fullname</Label>
        <Input id="fullname" name="fullname" placeholder="Fullname" />
      </div>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" name="username" placeholder="Username" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" placeholder="@your.email" />
      </div>
      <div className="my-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" name="password" placeholder="Password" />
      </div>
      <Button type="submit" className="w-full bg-indigo-700 hover:bg-indigo-500 my-6">Sign Up</Button>
    </div>
  );
}
