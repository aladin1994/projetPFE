import { GET_FACTURE } from "../ActionTypes/FactureTypes"

const initialState = {
    factures : []
}

const FactureReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_FACTURE:
    return({...state,factures:payload.facture})
  default:
    return state
  }
}   
export default FactureReducer