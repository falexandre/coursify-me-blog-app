import React from 'react';
import { CategoryList, Filter, Footer } from '../';
import { Container } from './styles';

export function Main() {
    return (
        <Container>
            <Filter/>
            <CategoryList/>
            <Footer/>
        </Container>
    )
}