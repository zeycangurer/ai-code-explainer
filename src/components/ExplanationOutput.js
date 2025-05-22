import React from 'react'
import styles from './ExplanationOutput.module.css';
import { GiBrain } from "react-icons/gi";

function ExplanationOutput({ text }) {
  if (!text) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}><GiBrain /> Açıklama:</h2>
      <pre className={styles.result}>{text}</pre>
    </div>
  );
}

export default ExplanationOutput