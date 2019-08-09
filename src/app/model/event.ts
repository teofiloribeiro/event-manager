import { Guest } from './guest';

export interface Event{
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