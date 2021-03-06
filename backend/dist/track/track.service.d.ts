import { Model, ObjectId } from "mongoose";
import { Track, TrackDocumment } from "./schemas/track.schema";
import { Comment, CommentDocumment } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FileService } from "src/file/file.service";
export declare class TrackService {
    private trackModel;
    private commentModel;
    private fileService;
    constructor(trackModel: Model<TrackDocumment>, commentModel: Model<CommentDocumment>, fileService: FileService);
    create(dto: CreateTrackDto, picture: any, audio: any): Promise<Track>;
    getAll(count?: number, offset?: number): Promise<Track[]>;
    getOne(id: ObjectId): Promise<Track>;
    delete(id: ObjectId): Promise<ObjectId>;
    addComment(dto: CreateCommentDto): Promise<Comment>;
    listen(id: ObjectId): Promise<void>;
    search(query: string): Promise<Track[]>;
}
