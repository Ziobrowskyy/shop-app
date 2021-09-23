export interface Campaign {
  name: string
  keywords: Array<string>
  bid: {
    amount: number
    minAmount: number
  };
  campaignFund: number
  status: boolean
  town: City
  radius: number
}

export enum City {
  Cracow = "Cracow",
  Warsaw = "Warsaw",
  Berlin = "Berlin"
}
