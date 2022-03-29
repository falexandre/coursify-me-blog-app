import React from 'react';
import { Container, Posts } from './styles';
import { CardPost, CategoryTitle } from '../';
import { CategoryDto } from '../../services/category/category.dto';

interface Props {
    data: CategoryDto;
}

export function CategoryList(props: Props) {
    const { title } = props.data;
    return (
        <Container>
            <CategoryTitle title={title}/>
            <Posts>
                <CardPost title={'teste'}
                          description={'teste'}
                          uri={'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg'}></CardPost>
            </Posts>
        </Container>
    )
}