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