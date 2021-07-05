import { Document } from "mongoose";
import * as mongoose from 'mongoose';
export declare type TrackDocumment = Track & Document;
export declare class Track {
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Comment[];
}
export declare const TrackSchema: mongoose.Schema<Document<Track, {}>, mongoose.Model<any, any>, undefined>;
