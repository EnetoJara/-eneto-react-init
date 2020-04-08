import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    kind?: "primary" | "default" | "success" | "danger" | "warning" | "secondary";
    solid?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error: string;
    value: string;
    label: string;
}

export interface IfProps {
    condition: boolean;
    children: React.ReactNode;
}

export interface RowProps {
    children: React.ReactNode;
}

export interface ColumnProps {
    children: React.ReactNode;
}
