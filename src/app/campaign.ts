export interface Campaign {
  id: string
  name: string
  keywords: Array<string>
  bid: {
    amount: number
    minAmount: number
  };
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
