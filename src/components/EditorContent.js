import React, { Component } from 'react';
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {getEditorContent}  from '../actions/lrnrAction';
import {
  Editor,
  createEditorState,
  BLOCK_BUTTONS
} from 'medium-draft';
import mediumDraftExporter from 'medium-draft/lib/exporter';

const blockButtons = [{
  label: 'H1',
  style: 'header-one',
  icon: 'header',
  description: 'Heading 1',
},
{
  label: 'H2',
  style: 'header-two',
  icon: 'header',
  description: 'Heading 2',
},{
  label: 'H4',
  style: 'header-four',
  icon: 'header',
  description: 'Heading 4',
}].concat(BLOCK_BUTTONS);


const toolbarConfigForTopicHeading = {
  block: ['unordered-list-item', 'header-one','header-two', 'header-three','header-four'],
  inline: [ 'hyperlink'],
}


const toolbarConfigForTopicContent = {
  block :[],
  inline: [ 'BOLD', 'ITALIC', 'UNDERLINE', 'hyperlink', 'HIGHLIGHT'],
}

class EditorContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(this.props.contentvalue), 
    };


    this.onChange = (editorState) => {
      // var renderedHTML = mediumDraftExporter(editorState.getCurrentContent());
    // console.log(renderedHTML);
      this.setState({ editorState });
    };

    this.refsEditor = React.createRef();

  }

  componentDidMount() {
    this.refsEditor.current.focus();
  }

  componentWillReceiveProps(props){
    this.setState({
      editorState: createEditorState(props.contentvalue), 
    });
  }

  render() {
    const { editorState } = this.state;
    // console.log(this.props);
    return (
      <div>
          <Editor
            ref={this.refsEditor}
            editorState={editorState}
            onChange={this.onChange} 
            editable='false'
            blockButtons={blockButtons}
            toolbarConfig={this.props.isSectionHeading ? toolbarConfigForTopicHeading :toolbarConfigForTopicContent }
          />
      </div>  
    );
  }
};


const mapStateToProps = state => {
  return {
    lrnrpanel : state.lrnrReducer
  }
}

const mapDispatchToProps = {getEditorContent};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditorContent))