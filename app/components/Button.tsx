import { useRouter } from "next/navigation";

interface ButtonProps {
    label: string;
    redirect: string;
    disabled?: boolean;
}

export const Button = ({
    label,
    redirect,
    disabled
}: ButtonProps) => {

    const router = useRouter();

    const handleClick = () => {
        if (!disabled) {
            router.push(redirect);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`
                p-2
                bg-indigo-600 
                rounded-lg 
                w-full
                flex 
                items-center 
                justify-center
                text-white
                ${disabled ? "opacity-75 cursor-not-allowed" : "opacity-100 hover:opacity-90 hover:cursor-pointer"}
            `}
        >
            {label}
        </button>
    );
};
