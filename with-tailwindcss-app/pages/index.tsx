import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Spooky Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col px-20 text-center bg-purple-200">

        <h1 className="text-6xl font-bold center-left">
          welcome to..{' '}
        </h1>
        
        <p className="mt-3 text-2xl">
          Animation{' '}
          <code className="rounded-md bg-pink-500 p-3 font-mono text-lg">
            ( nation )
          </code>
        </p>

        <div className="animate-pulse flex space-x-4 self-center">
          <a
            href=""
            className="mt-20 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 shadow-2xl shadow-cyan-400 self-center bg-gradient-to-r from-purple-500 to-pink-500 skew-y-12"
          >
            <h3 className="text-2xl font-bold">Do Not Click &rarr;</h3>
            <p className="mt-4 text-xl">
              It's a trap.
            </p>
          </a>
        </div>
          <a
            href=""
            className="mt-20 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 shadow-2xl shadow-cyan-400 bg-gradient-to-r from-purple-500 to-pink-500 self-center animate-ping"
          >
            <h3 className="text-2xl font-bold">Ping &rarr;</h3>
            
          </a>

          
          <a
            href=""
            className="mt-20 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 shadow-2xl shadow-cyan-400 self-center animate-bounce w-70 h-7"
          >
            
            <h3 className="text-2xl font-bold">BOUNCE IT </h3>
            
            
          </a>
          
          <Link
            href="Page2"
            className="mt-20 w-50 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 shadow-2xl shadow-green-400 animate-spin self-center"
          >
            <h3 className="text-2xl font-bold self-center">IM DIZZY</h3>
            
          </Link>
        
      </main>

    </div>
    
  )
}

export default Home
