export type Category = {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    meta: any;
    _links: any;
    total_views: number;
}

export class CategoryDto {
    id: number;
    title: string;
    total_views: number;

    static fromDto(entity: Category): CategoryDto {
        const payload = {} as CategoryDto;
        payload.id = entity.id;
        payload.title = entity.name;
        payload.total_views = 0;

        return payload;
    }

}