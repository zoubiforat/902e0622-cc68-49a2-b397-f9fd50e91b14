import { ObjectId } from "./object-id.model";

export interface Artist {
    id: string;
    name: string;
    _id: ObjectId
}
