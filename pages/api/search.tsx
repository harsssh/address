import { NextApiRequest, NextApiResponse } from 'next'

interface Address {
  zipcode: string
  prefcode: string
  address1: string // 都道府県名
  address2: string // 市区町村名
  address3: string // 町域名
  kana1: string
  kana2: string
  kana3: string
}

interface SearchResponse {
  message: string
  results: Address[] | null
  status: number
}

const baseURL = 'https://zipcloud.ibsnet.co.jp/api/search'

const searchZipCode = async (zipcode: string) => {
  const res = await fetch(`${baseURL}?zipcode=${zipcode}`)
  const data: SearchResponse = await res.json()
  return data
}

const handler = async (req: NextApiRequest, res: NextApiResponse<string>) => {
  const zipcode = req.query.zipcode as string
  const { status, results } = await searchZipCode(zipcode)
  if (results) {
    const r = results[0]
    res.status(status).send(r.address1 + r.address2 + r.address3)
  } else {
    if (status == 200) {
      res.status(204).end()
    } else {
      res.status(status).end()
    }
  }
}

export default handler
