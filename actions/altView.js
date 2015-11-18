// Assume container level component
// Also assume all dependencies are imported
import TopicAction from 'actions/TopicActions';

class EntryBox extends React.Component {

  render() {
    return (
      <div className={styles.entrybox}>
        <TopicTextInput 
          onChange={text => TopicAction.typing(text)} 
          onSave={text => TopicAction.createTopic(text)} />
      </div>
    );
  }
}

export default EntryBox;