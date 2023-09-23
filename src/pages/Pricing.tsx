import React from 'react'
import { Layout, PackageCard, PricingHero,Advertisement } from '../components/index'

const Pricing = () => {
    return (
        <Layout>
            <PricingHero/>
            <PackageCard />
            <Advertisement/>
        </Layout>
    )
}

export { Pricing }