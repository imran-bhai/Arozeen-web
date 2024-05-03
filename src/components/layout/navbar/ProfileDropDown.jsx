"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ProfileAvatar } from "./ProfileAvatar";
import { getToken, logout } from "@/app/config/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function ProfileDropDown() {
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleLogout = async () => {
    logout();
    toast.success("Logged out successfully");
    router.push("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    const accessToken = async () => {
      const Token = await getToken();
      const token = Token?.tokenId;
      if (token) {
        setToken(token);
      } else {
        setToken(null);
      }
    };
    accessToken();
  }, [handleLogout]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="  rounded-full h-10 w-10 ml-2 ">
          <ProfileAvatar className="focus:outline-none" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/edit-profile">
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        {token ? (
          <DropdownMenuItem onClick={() => handleLogout()}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={() => handleLogin()}>
            Login
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
