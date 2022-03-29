import React, { useEffect, useState } from 'react';
import { CategoryList, CategorySkeleton, Filter, Footer, If } from '../';
import { Container } from './styles';
import { useStateGlobalContext } from '../../stores/global.context';
import { CategoryDto } from '../../services/category/category.dto';
import { CategoryService } from '../../services/category/category.service';

export function Main() {
    const { state } = useStateGlobalContext();
    const [data, setData] = useState<CategoryDto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unmounted = false;
        if (loading === true) return;
        setLoading(true);
        getList();
        return () => {
            unmounted = true;
        };
    }, [state]);

    useEffect(() => {
        let unmounted = false;
        getList();
        return () => {
            unmounted = true;
        };
    }, []);

    const getList = async () => {
        const param = state.order;
        const payload = await CategoryService.list();
        setData(payload);
        setLoading(false);
    };

    return (
        <Container>
            <Filter/>
            {
                data.map((payload: CategoryDto) => (<CategoryList data={payload} key={payload.id}/>))
            }
            <If show={loading}>
                <CategorySkeleton/>
            </If>
            <If hide={loading}>
                <Footer/>
            </If>
        </Container>
    )
}