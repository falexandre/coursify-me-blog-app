import { AxiosResponse } from 'axios';
import HttpClient from '../http.client';
import { Media, MediaDto } from './media.dto';

const path = 'media';

export const MediaService = {
    get: async (id: number): Promise<MediaDto> => {
        const payload: AxiosResponse<Media[]> =
            await HttpClient.get(`${path}/?include=${id}`);
        return MediaDto.fromDto(payload?.data[0]);
    }
}