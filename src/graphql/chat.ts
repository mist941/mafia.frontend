import {gql} from '@apollo/client';

export const SYNC_MESSAGES_SUBSCRIPTION = gql`
    subscription SyncMessagesSubscription($gameId: Float!){
        syncMessagesSubscription(gameId: $gameId){
            id
            text
            createdAt
            user {
                id
                username
            }
        }
    }
`;

export const CREATE_MESSAGE = gql`
    mutation CreateMessage($createMessageInput: CreateMessageRequestDTO!){
        createMessage(createMessageInput: $createMessageInput){
            id
        }
    }
`;