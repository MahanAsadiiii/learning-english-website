import React from 'react'
import { Packages } from '../static'
import { Card } from './index'

const PackageCard = () => {
    return (
        <div className={`flex justify-center mx-auto mt-20 gap-6`}>
            {Packages.map((card) => {
                return (
                    <Card item={{ ...card }} />
                )
            }
            )}
        </div>
    )
}

export {PackageCard}