import { useContext } from "react";
import { MyContext } from "./lib/ContextAPIs";

export const Messages = () => {
        const { name, message, user, setUser} = useContext(MyContext);

        return (
            <div>
                {user?.map(info => {
                    return <h1 key={info.id}>{info.message}</h1>
                })}
            </div>
        )
}