import React from 'react';

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: 'button' | 'submit';
    children: [React.ReactElement, React.ReactElement];
}

const Button: React.FC<ButtonProps> = ({
    type: ButtonType,
    children,
    className,
    ...rest
}) => {
    return (
        <button
            className={className}
            type={ButtonType}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
