export type TCard = {
  id: number
  image: {
    medium: string
    original: string
  }
  summary: string
  name: string
}

export type TCardResponse = {
  score: number
  show: {
    id: number
    image: {
      medium: string
      original: string
    }
    summary: string
    name: string
  }
}
