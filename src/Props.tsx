import type React from "react";

export type Collapsed = {
  collapsed: boolean;
  setCollapsed: any;
};

export type FieldType = {
  username: string;
  password: string;
};

export type ProtectedRouteProps = {
  children: React.ReactNode;
};
