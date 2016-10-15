import React from 'react'
import { connect } from 'react-redux'

const getStyle = (typingWordIndex, index, wrongWord) => {
  if (index !== typingWordIndex) return {}
  return {
    color: wrongWord ? 'RED' : 'cornflowerblue',
    fontSize: '20px',
  }
}

let Paragraph = ({ paragraph, show, typingWordIndex, wrongWord }) => (
  <div
    className='paragraph'
    style={{ display: show ? 'block' : 'none' }}
  >
    {Array.isArray(paragraph.words) ?
      paragraph.words.map((word, index) =>
        <span
        key={index}
        style={getStyle(typingWordIndex, index, wrongWord)} >
          {index == paragraph.length - 1 ? word : `${word} `}
        </span>) : ''}
  </div>
)

const mapStateToProps = (state) => ({
  paragraph: state.paragraph,
  show: state.joinedRace && !state.finishedRace,
  typingWordIndex: state.typingWordIndex,
  wrongWord: state.wrongWord
})

Paragraph = connect(
  mapStateToProps,
)(Paragraph)

export default Paragraph;
