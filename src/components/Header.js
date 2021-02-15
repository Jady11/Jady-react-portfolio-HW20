import React from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import About from './About'
import Portfolio from './Portfolio'

const Header = () => {
    const portfolio = () => {
        return <Portfolio />
    }
    const homepage = () => {
        return <About />
    }
    return (
        <div>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={homepage}>
            Home
            </Link>
            <Link color="inherit" href="/Portfolio" onClick={portfolio}>
                Portfolio
            </Link>
            
            </Breadcrumbs>
        </div>
    )
}

export default Header
