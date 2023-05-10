import { IPost } from "@/entities/post";

type UserID = string;

export interface IUser {
    uid: UserID;
    email: string;
    username: string;
    photoUrl: string;
    city: string;
    university: string;
    friends: UserID[];
    posts: IPost[];
}
