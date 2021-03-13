export const Logger = store => {
    return next =>{ 
      return action => {
        console.log("")
         console.log("========================= REDUX ACTIVITY ================================")
        console.log("[State Store Before]",store.getState())
             console.log("[Dispatched Action]",action)
               let result = next(action);
              console.log("[State Store After]",store.getState())
            console.log("=========================================================================")
          console.log("")
          return result
        }
      }
    };