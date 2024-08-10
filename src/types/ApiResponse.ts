import { user } from "@/models/user";


export interface ApiResponse{
    success: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messageData?: Array<user>;
    
}