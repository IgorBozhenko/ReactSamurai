import { reRenderEntireTree } from "./render";

let state = {
    profileApp: {
        posts: [
        { id: 1, message: 'Hello', likescount: 0 },
        { id: 2, message: 'Where are you from?', likescount: 23 },
        { id: 1, message: 'Hello', likescount: 0 }]},
    
    messageApp: {
        dialogData: [
            { id: 1, name: 'Уля' },
            { id: 2, name: 'Паша' },
            { id: 3, name: 'Ксюша' }],
        messageData: [
            { id: 1, message: 'Привет' },
            { id: 2, message: 'Как дела?' },
            { id: 3, message: 'А?' }]
    }
};

export let addPost = (postMessage) => {
    let newPost = {id: 5, message: postMessage, likescount: 0};
    state.profileApp.posts.push(newPost);
    reRenderEntireTree(state);
}

export default state;