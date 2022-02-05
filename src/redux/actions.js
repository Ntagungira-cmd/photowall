export const addPhoto=(postadded)=>{
    return {
        type:"ADD_PHOTO",
        payload:postadded
    }
}
export const removePhoto=(post)=>{
    return {
        type:"REMOVE_PHOTO",
        payload:post
    }
}