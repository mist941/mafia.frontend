import {gql} from '@apollo/client';

export const SEARCH_USERS = gql`
    query SearchUsers($searchUsersInput: SearchUsersRequestDTO!){
        searchUsers(searchUsersInput: $searchUsersInput){
            id
            username
        }
    }
`;