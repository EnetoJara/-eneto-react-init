export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    kind?: "primary" | "default" | "success" | "danger" | "warning" | "secondary";
    solid?: boolean
}
