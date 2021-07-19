import React from 'react'
import { Grid } from '@chakra-ui/layout'

const Layout = ({ children }) => (
    <Grid
    templateColumns='1fr'
    templateRows='1fr 1fr 1fr'
    gap={2}
    px={6}
    h='100%'
    >
        {children}
    </Grid>
)

export default Layout