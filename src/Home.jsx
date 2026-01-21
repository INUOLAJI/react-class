// import { useEffect, useState } from "react"
// import { supabase } from "../form/lib/supabase";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Swal from "sweetalert2";

import { useContext } from "react";
import { MyContext } from "./form/lib/ContextAPIs";




export const Home = () => {
    const { name, message, user, setName, setMessage, setNewMessage, setUser, editInfoText, setEditInfoText, login, editInfo, saveNewMessage, deleteItem} = useContext(MyContext);

  return (
    <div className="mx-auto"  style={{maxWidth:'500px'}}>
        <div className="d-flex flex-column  my-3">
            <input type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value)}/>
            <textarea placeholder="Enter message" className="mt-2" onChange={(e)=> setMessage(e.target.value)}></textarea>
        </div>
         <button className="btn btn-primary" onClick={login}>Submit</button>

         <div>
            {user?.map(info =>{
                return <h6 key={info.id}> {info.name}: {info.message}
                {editInfoText === info.id ? (
                    <div>
                        <textarea name="newMessage" id="" value={newMessage} onChange={(e)=> setNewMessage(e.target.value)} ></textarea>
                        <div>
                        <button className="btn btn-success py-0 m-2" onClick={()=> saveNewMessage(info.id)}>Save</button>
                        <button className="btn btn-secondary py-0 m-2" onClick={()=> setEditInfoText(null)}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button className="btn btn-info py-0 m-2" onClick={()=> editInfo(info.id, info.message)}>Edit</button>
                        <button className="btn btn-danger py-0 m-2" onClick={() => deleteItem(info.id)}>Delete</button>
                    </div>
                )}
                </h6>
            })}
            
         </div>
    </div>
  )



//   return (
//     <div className="mx-auto"  style={{maxWidth:'600px'}}>
//         <div className="d-flex flex-column  my-3">
//             <input type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value)}/>
//             <textarea placeholder="Enter message" className="mt-2" onChange={(e)=> setMessage(e.target.value)}></textarea>
//         </div>
//          <button className="btn btn-primary" onClick={login}>Submit</button>

//          <div>
//           {user?.map(info =>{
//             return <div className="mt-2" key={info.id}>
//               <b>{info.name}</b>: <span className="text-danger">{info.message}</span> 
//               { editInfoText === info.id ? (
//                   <div>
//                     <textarea className="mt-2 form-control" value={newMessage} onChange={(e)=> setNewMessage(e.target.value)}></textarea>
//                     <div>
//                       <button className="btn btn-success py-0" onClick={()=>saveNewMessage(info.id, info.message)}>Save</button>
//                     <button className="btn btn-secondary py-0 mx-2" onClick={()=>setEditInfoText(null)}>Close</button>
//                     </div>
//                   </div>
//               ):(
//                 <span>
//                   <button className="btn btn-info py-0 ms-2" onClick={()=>editInfo(info.id, info.message)}>Edit</button>
//                   <button className="btn btn-danger py-0 ms-2" onClick={()=>deleteItem(info.id)}>Delete</button>
//                 </span>
//               )}
              
//             </div>
//           })}
//          </div>
//     </div>
//   )

}
