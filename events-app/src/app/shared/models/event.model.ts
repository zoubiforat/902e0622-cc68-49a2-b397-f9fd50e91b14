import { Artist } from "./artist.model";
import { Pick } from "./pick.model";
import { Venue } from "./venue.model";

export interface Event {
    _id: string;
    title: string;
    flyerFront: string;
    attending: string;
    date: string;
    startTime: string;
    endTime: string;
    contentUrl: string;
    venue: Venue;
    pick: Pick;
    artists: Artist[];
    city: string;
    country: string;
    private: boolean;
    __v: number;
}
