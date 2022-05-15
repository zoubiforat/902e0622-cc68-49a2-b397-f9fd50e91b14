import { Artist } from "./artist.model";
import { Pick } from "./pick.model";
import { Venue } from "./venue.model";

export interface Event {
    _id: string;
    title: string;
    flyerFront: string;
    attending: number;
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

export function whichEventComesFirst(event1: Event, event2: Event)  {
    let diff = event1.startTime.localeCompare(event2.startTime);
    if(diff !== 0) return diff;
    diff = event1.endTime.localeCompare(event2.endTime);
    if(diff !== 0) return diff;
    return 1;
}
