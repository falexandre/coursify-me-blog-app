import { CategoryDto, Category } from './category.dto';
import { AxiosResponse } from 'axios';
import HttpClient from '../http.client';

const path = 'categories';

export const CategoryService = {
    get: async (id: string): Promise<CategoryDto> => {
        const payload: AxiosResponse<Category> =
            await HttpClient.get(`${path}/${id}`);
        return CategoryDto.fromDto(payload.data);
    },
    list: async (): Promise<CategoryDto[]> => {
        const payload: AxiosResponse<Category[]> = await HttpClient.get(`${path}`);
        return payload?.data?.map((v: Category) =>
                CategoryDto.fromDto(v)
            );
    }
}