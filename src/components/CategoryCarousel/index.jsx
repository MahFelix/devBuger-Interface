import React, { useEffect, useState } from "react"
import Carousel from 'react-elastic-carousel'
import Category from '../../assets/category.png'
import { Container, CategoryImg, ContainerItens, Image, Button} from './styles'
import api from '../../services/api'

export function CategoryCarousel() {
    const [categories, setCategories] = useState([])
    useEffect(() => {

        async function loadCategories() {
            const {data} = await api.get('categories')

            setCategories(data)
        }

        loadCategories()
    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

    return (
        <Container>
            <CategoryImg src={Category} alt="logo da categoria" />

            <Carousel itemsToShow={6} style={{width:'90'}} breakPoints={breakPoints} >
           {
            categories && categories.map(category => (
                <ContainerItens key={category.id}>
                    <Image src={category.url} alt="foto da categoria"></Image>
                    <Button>{category.name}</Button>
                </ContainerItens>
            ))
           }
            </Carousel>

        </Container>
    )
}

export default CategoryCarousel;