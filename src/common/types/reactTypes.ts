import { SetStateAction } from "react";

export type ChildrenType = Readonly<React.ReactNode>;

export type SetStateType<T> = React.Dispatch<SetStateAction<T>>;

export type ClassNameType = string | undefined;
