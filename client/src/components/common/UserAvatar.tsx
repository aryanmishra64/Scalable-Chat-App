import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAvatar({
  name,
  image,
}: {
  name?: string;
  image?: string;
}) {
  const fallback = name?.[0]?.toUpperCase() || "U"; // Use "U" as fallback if name is undefined

  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}