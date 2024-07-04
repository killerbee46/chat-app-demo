import { UserInterface } from "./user";

export interface ChatListItemInterface {
  sender: any;
  receiver: any;
  // handymate_quote: string;
  chat_messages:ChatMessageInterface[];
  last_message: ChatMessageInterface;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface ChatMessageInterface {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  chat:string;
  attachments?: {
    url: string;
    localPath: string;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
