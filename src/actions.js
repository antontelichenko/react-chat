import faker from 'faker'

export const AddNewUser = () => {
    const username = `@${faker.internet.userName().toLowerCase()}`
    return {
        type: 'ADD_NEW_USER',
        username
    }
}

export const newMessage = (author, text,datetime) => {
    return {
        type: 'ADD_NEW_MESSAGE',
        author, text, datetime
    }
}