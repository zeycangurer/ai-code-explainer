import React from 'react'
import styles from './CodeInput.module.css';

function CodeInput({ code, setCode }) {
  return (
    <textarea
      className={styles.textarea}
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Kod parçanı buraya yapıştır."
    />
  );
}

export default CodeInput