import React from 'react';
import { Container, Posts } from './styles';
import { CardPost, CategoryTitle } from '../';

export function CategoryList() {
    return (
        <Container>
            <CategoryTitle title="Teste"/>
            <Posts>
                <CardPost title={'The Garden City'}
                          description={'Bengaluru (also called Bangalore) is the center of India\'s high-tech\n' +
                              '                        industry. The city is also known for its parks and nightlife.'}
                          uri={"https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"}></CardPost>
            </Posts>
        </Container>
    )
}