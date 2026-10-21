import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

type LinkProps = NextLinkProps & {
  children: React.ReactNode;
  className?: string;
};

export function Link({ children, ...props }: LinkProps) {
  return <NextLink {...props}>{children}</NextLink>;
}