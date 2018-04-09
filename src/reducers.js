import {combineReducers} from 'redux';

const userState = ['@john214', '@alex562', '@alena2000']
const messagesState = [
    {
        text: 'Hello World!',
        datetime: 1523423523424,
        author:'@john214'
    },
    {
        text: 'hi john214))!',
        datetime: 1523424523424,
        author:'@alex562'
    }
]

const usersReducer = (state = userState, action) => {
    if( action.type === 'ADD_NEW_USER')
    {
        return state.concat(action.username)
    }
    return state
}

const messagesReducer = ( state = messagesState, action) => {
    if(action.type === 'ADD_NEW_MESSAGE') {
        return state.concat({
            text: action.text,
            datetime: action.datetime,
            author: action.author
        })
    }
    return state;
}

export default combineReducers({usersReducer, messagesReducer});