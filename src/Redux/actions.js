// use axios for api call
import axios from "axios";
import { Gettingdata_Loading, Gettingdata_SUCCESS, Gettingdata_Error, GettingCITY, GettingCITY_ERROR, Getting_TERMS } from "./actionTypes";

export const DataLoading = () => ({ type: Gettingdata_Loading })
export const DataSuccess = (payload) => ({ type: Gettingdata_SUCCESS, payload })
export const DataFailure = () => ({ type: Gettingdata_Error })
export const Cityfilter = (payload) => ({ type: GettingCITY, payload })
export const Cityfiltererror = (payload) => ({ type: GettingCITY_ERROR, payload })
export const DataTerms = (payload) => ({ type: Getting_TERMS, payload })

export const getData = () => async (dispatch) => {
  dispatch(DataLoading())
  try {
    let res = await axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231")
    console.log(res)
    if (res.data.terms) {
      dispatch(DataTerms(res.data.terms))
    }
    if (res.data.status) {
      dispatch(DataSuccess(res.data.data))
    }
  }
  catch (err) {
    console.log("Erro is There", err)
    dispatch(DataFailure())
  }
}

export const filterbycity = (payload) => async (dispatch) => {
  //console.log(payload);
  let res = await axios.get(`https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${payload}`)

  if (res.data.status === true) {
    console.log(res.data.data)
    dispatch(Cityfilter(res.data.data))
  }
  else {

    dispatch(Cityfiltererror({ message: res.data.message }))
  }

}
