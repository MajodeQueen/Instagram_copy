import Login from '@/components/Login'
import Head from 'next/head'

const login = () => {
  return (
    <div>
      <Head>
      <title>Instagram clone</title>
        <meta
          name="description"
          content="Instagram clone using next js ,mongodb and tailwind"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/SeekPng.com_insta-png_884742.png" />
      </Head>
      <Login/>
    </div>
  )
}

export default login
