import Image from "next/image";
import { Button } from "./Button";

interface ProfileProps {
    user: any;
}

export const Profile = ({
    user  
}: ProfileProps) => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-between text-center">
            <div>
                <Image
                    src={user.picture}
                    height={64}
                    width={64}
                    alt="profile_pic"
                    className="rounded-full"
                />
            </div>
            <div>
                <h1>Welcome <span className="font-bold">{user.name}</span></h1>
                
            </div>
            <Button
                label="logout"
                redirect="/api/auth/logout"
            />
        </div>
        
    )
}