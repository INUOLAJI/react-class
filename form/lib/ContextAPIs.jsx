import { createContext } from "react";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import Swal from "sweetalert2";

export const MyContext = createContext();


export const ContextAPIs = ({children}) => {
  
    const [name, setName] = useState("");
    const [messages,setMessages] = useState("");
    const [user, setUser] = useState(null);
    const [editInfoText, setEditInfoText] = useState(null);
    const [newMessage, setNewMessage] = useState("");


    const login = async()=>{
        if (!name || !messages) {
            Swal.fire({
                icon: "warning",
                title: "Field cannot be empty!",
                text: "Please fill the name and message box",
                showCancelButton: true,
                cancelButtonAriaLabel: "red"
            })
            return;
        }
 
        const { error } = await supabase.from("seven").insert([{ name, messages }]);

        if(error){
            alert("Error inserting message");
        }else{
            fetchData();
            Swal.fire({
                icon: "success",
                title: "Message inserted successfully",
                text: "Message has been delivered successfully"
            })
        }

    };

    const editInfo = (id, msg) => {
        setEditInfoText(id);
        setNewMessage(msg);
    }

    const saveNewMessage = async (id) => {
        const { error } = await supabase.from("seven")
            .update({ messages: newMessage })
            .eq("id", id);
        fetchData();
        setEditInfoText(null);
    }

    const deleteItem = async (id) => {
        const { error } = await supabase.from("seven")
            .delete()
            .eq("id", id);
        fetchData();
    }

    const fetchData = async()=>{
        const {data, error} = await supabase.from("seven")
        .select("*")
        .order("created_at", {ascending:false})
        setUser(data);

    }

    useEffect(()=>{
        fetchData();
    },[])


    const content ={
        name, messages, user, setName, setMessages, login, editInfo, editInfoText, newMessage, setNewMessage, saveNewMessage, deleteItem
    }



    return(
        <MyContext.Provider value={content}>
            {children}
        </MyContext.Provider>
    )

}