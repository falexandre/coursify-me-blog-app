import { Category, CategoryDto } from './category.dto';
import { AxiosResponse } from 'axios';
import HttpClient from '../http.client';

const path = 'categories';

export const CategoryService = {
    list: async (): Promise<CategoryDto[]> => {
        const payload: AxiosResponse<Category[]> = await HttpClient.get(`${path}`);
        return payload?.data?.map((v: Category) =>
            CategoryDto.fromDto(v)
        );
    }
}