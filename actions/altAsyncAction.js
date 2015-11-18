import alt from 'altInstance';
import TopicWebAPIUtils from 'utils/TopicWebAPIUtils';

class TopicActions {
  create(text) {
      const data = {
        count: 1,
        text: text
      };
      this.dispatch(data);
		TopicWebAPIUtils.addTopic(data)
        .done(function success() {})
        .fail(function failure() {});
  }
}

export default alt.createActions(TopicActions);