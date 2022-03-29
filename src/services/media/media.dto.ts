import { Rendered } from '../post/post.dto';

type Image = {
    file: string;
    width: number;
    height: number;
    mime_type: string;
    source_url: string;
}

type Sizes = {
    thumbnail: Image;
    medium: Image;
    medium_large: Image;
    large: Image;
    'post-thumbnail': Image;
    full: Image;
}

type MediaDetails = {
    width: number;
    height: number;
    file: string;
    sizes: Sizes
}

export type Media = {
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
    title: Rendered
    author: 3;
    comment_status: string;
    ping_status: string;
    template: string;
    meta: any;
    description: Rendered;
    caption: Rendered;
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: MediaDetails;
    post: number;
    source_url: string;
    _links: any;
}

export class MediaDto {
    id: number;
    uri: string;

    static fromDto(entity: Media): MediaDto {
        const payload = {} as MediaDto;
        payload.id = entity.id;
        payload.uri = entity.media_details.sizes.thumbnail.source_url;

        return payload;
    }

}
