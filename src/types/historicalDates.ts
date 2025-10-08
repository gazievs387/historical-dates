


export interface Event {
    year: number
    description: string
}
  
export interface Period {
    id: number
    category: string
    startYear: number
    endYear: number
    events: Event[]
}
