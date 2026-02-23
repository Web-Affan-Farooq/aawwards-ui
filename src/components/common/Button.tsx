import type React from "react";

type ButtonBlackProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonBlack = ({ children, ...props }: ButtonBlackProps) => {
    return (
        <button {...props} className={`bg-black hover:bg-custom-black transition-all duration-[0.3s] ease-in-out text-custom-white rounded-lg px-[19px] py-[10px] font-semibold text-[14px] ${props.className}`}>
            {children}
        </button>
    );
};
export const ButtonWhite = ({ children, ...props }: ButtonBlackProps) => {
    return (
        <button {...props} className={`text-custom-black hover:outline-none hover:bg-custom-black hover:text-custom-white outline outline-black transition-all duration-[0.3s] ease-in-out rounded-lg px-[19px] py-[10px] font-semibold text-[14px] ${props.className}`}>
            {children}
        </button>
    );
};
