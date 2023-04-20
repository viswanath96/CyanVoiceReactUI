import axios from "axios";

const baseUrl = "http://localhost:54047/api/"

const baseUrl1 = "https://cyanvoice.com/api/"


export default {

    ApplicationApi(url = baseUrl1 + 'VttSCeinterface/getuserfromguid?id=') {
        return {
            fetchById: id => axios.get(url + id)
        }
    }
}