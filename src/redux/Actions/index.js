export const incNumber = () =>{
    return {
        type: "Increment",
    }
}

export const decNumber = () =>{
    return {
        type: "Decrement",
    }
}

export const dec5Number = (num) =>{
    return {
        type: "Decrement5",
        payload: num,
    }
}


