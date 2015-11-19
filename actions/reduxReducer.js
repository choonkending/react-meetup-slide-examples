import { TYPING, CREATE_TOPIC} from 'constants/actionTypes';

export function topic(state = {}, action) {
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
