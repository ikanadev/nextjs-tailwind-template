import { FC } from 'react'
import Head from 'next/head'

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-gray-700 text-xl text-center mt-2">
        Hello from Next JS + <span className="text-green-600">Tailwind</span>
      </h1>
    </div>
  )
}
export default Home
