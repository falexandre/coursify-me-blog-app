import React from 'react';
import { Container, Posts } from './styles';
import { CardPost } from '../CardPost';

export function CategoryList() {
    return (
        <Container>
            <Posts>
                <CardPost/>
                <CardPost/>
                <CardPost/>
                <CardPost/>
            </Posts>
        </Container>
    )
}