import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
<div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
        <title>Spooky Website</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-start-2 row-span-2 ...">
            <button className='rounded-xl bg-cyan-400'>Clickable</button>
        </div>
        <div className="row-end-3 row-span-2 ...">
            02
        </div>
        <div className="row-start-1 row-end-4 ...">
            03
        </div>
    </div>
</div>
    )
}
export default Home