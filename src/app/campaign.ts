export interface Campaign {
  user?: string
  id: string
  name: string
  keywords: Array<string>
  currentBid: number
  minBid: number
  campaignFund: number
  status: boolean
  city: City
  radius: number
}

export enum City {
  Cracow = "Cracow",
  Warsaw = "Warsaw",
  Berlin = "Berlin"
}
