// import React from 'react'
import { Layout, Intro, HowItWorks, AboutUsSec, PackageSec, DownloadSec, Advertisement } from '../components/index'

const Home = () => {
    return (
        <Layout>
            <Intro />
            <HowItWorks />
            <AboutUsSec/>
            <PackageSec/>
            <Advertisement/>
            <DownloadSec/>
        </Layout>
    )
}

export {Home}