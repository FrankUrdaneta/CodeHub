import React, { useState } from 'react';

function CodeBox(props) {
  const [code, setCode] = useState(props.initialCode || '');
  const [isCopied, setIsCopied] = useState(false);

  function handleChange(event) {
    setCode(event.target.value);
  }

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div className="code-box">
      <textarea
        value={code}
        onChange={handleChange}
        placeholder={props.placeholder || 'Insert code here...'}
      />
      <button onClick={handleCopy}>
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <style jsx>{`
        .code-box {
          
            .codebox {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: monospace;
  font-size: 14px;
  padding: 10px;
}


        }
      `}</style>
    </div>
  );
}

export default CodeBox;
