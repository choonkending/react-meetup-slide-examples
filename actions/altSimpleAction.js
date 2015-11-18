import alt from 'altInstance';

class TopicActions {
  
  typing(text) {
    this.dispatch(text);
  }

}

export default alt.createActions(TopicActions);