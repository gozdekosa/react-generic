type Props = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = "", ...props }: Props) => {
    return (
        <button className={`
        w-full rounded-lg bg-blue-600 px-4 py-3
        text-sm font-semibold text-white shadow-md
        transition duration-200
        hover:bg-blue-700
        focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:ring-offset-2
        active:scale-[0.98]
        ${className}
      `} {...props}>
            {children}
        </button>
    );
}

export default Button;