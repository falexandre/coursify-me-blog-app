export type Rendered = {
    rendered: string;
}

export type Post = {
    id: number;
    date: string;
    date_gmt: string;
    guid: Rendered;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Rendered;
    content: Rendered;
    excerpt: Rendered;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any;
    categories: string[];
    tags: string[];
    page_views: string[];
    _links: any;
}

export class PostDto {
    id: number;
    title: string;
    description: string;
    featured_media: number;
    content: string;

    static fromDto(entity: Post): PostDto {
        const payload = {} as PostDto;
        payload.id = entity.id;
        payload.title = entity.title?.rendered;
        payload.description = entity?.excerpt?.rendered.replace(/[<p>|</p>]/g, '');
        payload.featured_media = entity.featured_media;
        payload.content = entity.content?.rendered;

        return payload;
    }

}