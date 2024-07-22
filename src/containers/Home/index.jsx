import React from "react"

import HomeLogo from '../../assets/homedalogo.svg'

import {Container, HomeImg} from './styles'
import CategoryCarousel from "../../components/Button/CategoryCarrousel"

export function Home() {
    
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="logo da home" />
            <CategoryCarousel/>
        </Container>
    )
}