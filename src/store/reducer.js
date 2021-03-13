import {ADD,SET_STAR,DELETE} from './actionTypes'

import {updateState} from './../helper/updateStateHealper' 


let initialState = {
    list : [],
    changes : 0
}


export const List = ( state=initialState , action)=>{
        switch(action.type){
            
                case ADD :
                    return updateState({...state},{
                        list : [...state.list,{
                            id:(Math.random()*10000).toFixed(0),
                            fName : action.value.fname,
                            fav : false,
                        }],
                        changes : (Math.random()*10000).toFixed(0)
                    })

                case SET_STAR :
                return updateState({...state},{
                    list : action.value,
                    changes : (Math.random()*10000).toFixed(0)
                })

                case DELETE :
                    let newList = [...state.list].filter((key)=>key.id!=action.value)
                    return updateState({...state},{
                        list : newList,
                        changes : (Math.random()*10000).toFixed(0)
                    })
                
                    
                default :
                    return updateState({...state},{})
        }

}