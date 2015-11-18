// Assume container level component
// Also assume all dependencies are imported
class EntryBox extends React.Component {

  render() {
    return (
      <div className={styles.entrybox}>
        <TopicTextInput 
          onChange={text => typing(text)} 
          onSave={text => createTopic(text)} />
      </div>
    );
  }
}

export default EntryBox;