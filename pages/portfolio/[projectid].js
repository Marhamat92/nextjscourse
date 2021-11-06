import React from 'react'
import {useRouter} from "next/router"


function PortfolioProjectPage() {

    const router = useRouter();
    console.log(router.pathname)
    console.log(router.query)

    return (
        <div>
            <h1>The Portfolio Project Page with dynamic path</h1>
        </div>
    )
}

export default PortfolioProjectPage
