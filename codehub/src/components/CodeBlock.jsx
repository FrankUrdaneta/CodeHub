import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, value }) => {
  const isComment = value && value.startsWith('//');
  return isComment ?(
    <pre>{value}</pre>
  ): (
    <SyntaxHighlighter language={language} style={xonokai}>
      {value}
    </SyntaxHighlighter>
  );
};

CodeBlock.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default CodeBlock;
