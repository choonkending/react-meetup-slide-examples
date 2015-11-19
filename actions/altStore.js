import TopicActions from 'actions/TopicActions';
import alt from 'altInstance';

class TopicStore {

  constructor() {
    this.topics = [];
    // Do not think we need an Immutable object here
    this.newTopic = '';
    this.bindListeners({
      handleCreate: TopicActions.CREATE,
      handleTyping: TopicActions.TYPING
    });
  }

  handleCreate(data) {
    this.topics.push(data);
    this.emitChange();
  }

  handleTyping(text) {
    this.newTopic = text;
    this.emitChange();
  }

}

// Export our newly created Store
export default alt.createStore(TopicStore, 'TopicStore');
