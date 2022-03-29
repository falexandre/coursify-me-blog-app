import React, { useEffect, useState } from 'react';
import { Container, Posts } from './styles';
import { CardPost, CategoryTitle, If, PostSkeleton } from '../';
import { CategoryDto } from '../../services/category/category.dto';
import { PostService } from '../../services/post/post.service';
import { PostDto } from '../../services/post/post.dto';

interface Props {
    data: CategoryDto;
}

export function CategoryList(props: Props) {
    const { id, title } = props.data;
    const [data, setData] = useState<PostDto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unmounted = false;
        setLoading(true);
        getList();
        return () => {
            unmounted = true;
        };
    }, [id]);

    const getList = async () => {
        const payload = await PostService.list(`?categories=${id}`);
        setData(payload);
        setLoading(false);
    };

    return (
        <Container>
            <CategoryTitle title={title}/>
            <Posts>
                {
                    data.map((payload: PostDto) => (<CardPost data={payload} key={payload.id}/>))
                }
                <If show={loading}>
                    <PostSkeleton/>
                    <PostSkeleton/>
                </If>
            </Posts>
        </Container>
    )
}