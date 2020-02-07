import { Photo } from './photo';

export interface User {
    /** podstawowe info */
            id: number;
            username: string;
            gender: string;
            age: number;
            zodiacSign: string;
            created: Date;
            lastActive: Date;
            city: string;
            country: string;
        /** zadkladka info */
            growth: string;
            eyeColor: string;
            hairColor: string;
            martialStatus: string;
            education: string;
            profession: string;
            children: string;
            languages: string;
        /** zakladka o mnie */
            motto: string;
            description: string;
            personality: string;
            lookingFor: string;
            /** pasja zainteresowania */
            interests: string;
            freeTime: string;
            sport: string;
            movies: string;
            music: string;
            /** Zakładka preferencje */
            iLike: string;
            idoNotLike: string;
            makesMeLaugh: string;
            itFeelsBestIn: string;
            friendeWouldDescribeMe: string;
            /** zakladka zdjecia */
            photos: Photo[];
            photoUrl: string;
}
