import axios from "axios"
import { GET_FACTURE } from "../ActionTypes/FactureTypes"



export const Get_Facture = () => async (dispatch) => {
    try {
        const res = await axios.get('/facture/get')
        dispatch({ type: GET_FACTURE, payload: res.data })
       
    } catch (error) {
        console.log(error)
    }
}
export const Edit_facture=(id,data)=>async(dispatch)=>{
    try {
        await axios.put("/facture/update/"+id,data)
        dispatch(Get_Facture())
    } catch (error) {
        console.log(error) 
    }
}
export const Delete_facture=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/facture/delete/${id}`)
        dispatch(Get_Facture())
    } catch (error) {
        console.log(error) 
    }
}
export const Add_facture=(data)=>async(dispatch)=>{
    try {
        await axios.post('/facture/post',data)
        dispatch(Get_Facture())
    } catch (error) {
        console.log(error)
    }
}