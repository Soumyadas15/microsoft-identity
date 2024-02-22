interface BoxrProps {
    children: React.ReactNode;
    height: string;
}

export const Box = ({
    children,
    height
}: BoxrProps) => {
    return (
        <div className={`
                w-[15rem] 
                ${height}
                bg-white 
                rounded-lg 
                flex 
                flex-col 
                items-center 
                justify-between 
                p-5
                shadow-lg
            `}
          >
            {children}
          </div>
    )
}