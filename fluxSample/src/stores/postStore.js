import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _posts = [];

class PostStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getPosts() {
        return _posts;
    }
    addPost(post) {
        debugger;
        post.id=_posts.length+1;
        _posts.push(post);
        this.emitChange();
    }
}

const store = new PostStore();

dispatcher.register((action) => {
    console.log(action);
    switch (action.actionTypes) {
        case actionTypes.GET_POSTS:
            debugger;
            _posts = action.posts;
            store.emitChange();
            break;
         case actionTypes.ADD_POST:
            action.post.id=_posts.length+1;
            _posts.push(action.post);
             _posts = [..._posts];
                store.emitChange();
                break;
        default:
    }
});

export default store;
