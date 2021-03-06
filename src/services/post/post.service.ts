import { Post, PostDto } from './post.dto';
import { AxiosResponse } from 'axios';
import HttpClient from '../http.client';

const path = 'posts';

export const PostService = {
    get: async (id: string): Promise<PostDto> => {
        const payload: AxiosResponse<Post> =
            await HttpClient.get(`${path}/${id}`);
        return PostDto.fromDto(payload?.data);
    },
    list: async (filters = ''): Promise<PostDto[]> => {
        const payload: AxiosResponse<Post[]> = await HttpClient.get(`${path}${filters}`);
        return payload?.data?.map((v: Post) =>
            PostDto.fromDto(v)
        );
    }
}