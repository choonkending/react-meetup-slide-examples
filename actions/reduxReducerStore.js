import {
  TYPING,
  CREATE_TOPIC,
  DESTROY_TOPIC,
  INCREMENT_COUNT,
  DECREMENT_COUNT } from 'constants/actionTypes';
import { createStore } from 'redux';

function topic(state = {}, action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state,
        { newTopic: action.newTopic }
      );
    case CREATE_TOPIC:
      return {
        topics: [...state.topics, { id: action.id, count: action.count, text: action.text } ],
        newTopic: ''
      };
    default:
      return state;
  }
}

let store = createStore(todoApp);
// Do stuff with store

