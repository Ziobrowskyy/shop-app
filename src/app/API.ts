import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const api = axios.create({
  baseURL: "/api"
})

export default class API {
  static insertCampaign = (data: any) => api.post("/campaign", data, {
    headers: {"content-type": "multipart/form-data"}
  })
  static getCampaigns = () => api.get("/campaigns")

  static getCampaign = (id: string) => api.get("/campaign", {params: {id}})

  static deleteCampaign = (id: string) => api.delete("/campaign", {params: {id}})

  static update = (id: string, data: any) => api.put("/campaign", data, {
    params: {id},
    headers: {"content-type": "multipart/form-data"}
  })

}

// mocking
const mock = new MockAdapter(api)
import campaigns from "../assets/mock-data/campaigns.json"

mock.onGet("/campaigns").reply(200, campaigns)

mock.onGet(new RegExp("/campaign")).reply(({params: {id}}) => {
  const found = campaigns.find(el => el.id == id)
  if (found)
    return [200, found]
  else
    return [400, null]
})

mock.onPost("/campaign").reply(({data}) => {
  campaigns.push(JSON.parse(data))
  return [200, data.id]
})

mock.onDelete("/campaign").reply(({params: {id}}) => {
  const found = campaigns.find(el => el.id == id)
  if (!found)
    return [400]
  campaigns.splice(campaigns.indexOf(found), 1)
  return [200, found.id]
})
