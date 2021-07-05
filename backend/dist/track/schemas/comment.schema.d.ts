import { Document } from "mongoose";
import { Track } from "./track.schema";
import * as mongoose from 'mongoose';
export declare type CommentDocumment = Comment & Document;
export declare class Comment {
    username: string;
    text: string;
    track: Track;
}
export declare const CommentSchema: mongoose.Schema<Document<Comment, {}>, mongoose.Model<any, any>, undefined>;
