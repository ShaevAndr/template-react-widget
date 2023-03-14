export const add = () => {
    return ({type:"ADD"})
}
export const sub = () => {
    return ({type:"SUB"})
}
export const set = (new_value) => {
    return ({type:"SET", payload: new_value})
}