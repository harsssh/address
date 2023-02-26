import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Address</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>Hello Next.js!</p>
      </main>
    </div>
  )
}
