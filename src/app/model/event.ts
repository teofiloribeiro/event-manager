import { Guest } from './guest';

export interface Event{
    _id: string,
    title: string;
    city: string;
    date: Date;
    description: string;
    guest: [Guest],
    location: {
        address:{
            street: string;
            city: string;
            number: string;
            state: string;
            postalCode: string;
        }
        x:{
            type: String
        },
        y:{
            type: String
        }
    }
}