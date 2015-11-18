import { createTopic, typing } from 'actions/topics';
// Assume container level component
// Also assume all dependencies are imported
class EntryBox extends React.Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div className={styles.entrybox}>
        <TopicTextInput 
          onChange={text => dispatch(typing(text))} 
          onSave={text => dispatch(createTopic(text))} />
      </div>
    );
  }
}

export default connect()(EntryBox);