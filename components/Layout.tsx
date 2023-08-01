import React from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="min-h-screen w-11/12 mx-auto">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout