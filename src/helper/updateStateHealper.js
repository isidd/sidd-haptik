export const updateState = (oldState , valuesToUpdate) =>{
    return {
        ...oldState ,
        ...valuesToUpdate
    }
}