// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const API_URL = "http://localhost:9090/v1/images"




export type Images = {
  id: number,
  albumId: number,
  title: string,
  imageUrl: string
}
type Data = {
  images: Images[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(API_URL, { method: "GET" })
  const images = await response.json()
  res.send(images)
}
