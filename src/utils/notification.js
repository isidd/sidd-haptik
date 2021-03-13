import React from 'react';
 
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
 export default function notification(type,msg){
    const notify = (type,msg) =>{
        console.log(type)
        switch(type) {
            case 'success' :
                toast.success(msg, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                  break ;
            case "error" :
            toast.error(msg, {
              position: toast.POSITION.TOP_RIGHT
            });
            break ; 

            case "default" :
            toast.error(msg, {
              position: toast.POSITION.TOP_RIGHT
            });
            break ;
        }
    
    }
    notify(type,msg)
  }