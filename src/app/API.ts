import axios, {AxiosResponse} from "axios"
import MockAdapter from "axios-mock-adapter"
import {User} from "./user";
import {Campaign} from "./campaign";

const api = axios.create({
  baseURL: "/api"
})

export default class API {
  static insertCampaign = (data: any) => api.post("/campaign", data, {
    headers: {"content-type": "multipart/form-data"}
  })
  static getCampaigns = () => api.get("/campaigns")

  static getCampaign: ((id: string) => Promise<AxiosResponse<Campaign>>) = (id: string) => api.get("/campaign", {params: {id}})

  static deleteCampaign = (id: string) => api.delete("/campaign", {params: {id}})

  static update = (id: string, data: any) => api.put("/campaign", data, {
    params: {id},
    headers: {"content-type": "multipart/form-data"}
  })

  static login = (data: User) => api.post("/login", data, {
    headers: {"content-type": "multipart/form-data"}
  })

  static register = (data: { login: string, password: string }) => api.post("/register", data, {
    headers: {"content-type": "multipart/form-data"}
  })
}

// mocking
const mock = new MockAdapter(api)
import _campaigns from "../assets/mock-data/campaigns.json"
import _users from "../assets/mock-data/users.json"
const campaigns = _campaigns
const users = _users
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

mock.onPut("/campaign").reply(({data, params}) => {
  const updatedData = JSON.parse(data)
  const found = campaigns.find(el => el.id == params.id)
  if (!found) {
    return [400]
  }
  const idx = campaigns.indexOf(found)
  Object.keys(updatedData).forEach(key => {
    if (key === "currentBid")
      found.currentBid = updatedData.currentBid
  })
  campaigns[idx] = found
  return [200]
})

mock.onPost("/login").reply(({data}) => {
  const {login, password} = JSON.parse(data)
  const found = users.find(el => el.login == login && el.password == password)
  if (!found)
    return [400, "Wrong user and/or password"]
  return [200]
})

mock.onPost("/register").reply(({data}) => {
  const {login, password} = JSON.parse(data)
  const found = users.find(el => el.login == login)
  if (found)
    return [400, "User with given name already exists"]
  users.push({login, password})
  return [200]
})
