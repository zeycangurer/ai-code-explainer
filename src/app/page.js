'use client';
import { useState } from 'react';
import CodeInput from '@/components/CodeInput';
import ExplanationOutput from '@/components/ExplanationOutput';
import styles from './page.module.css';
import { GiBrain } from "react-icons/gi";

function Home() {
  const [code, setCode] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    setLoading(true);
    const res = await fetch('/api/explain', {
      method: 'POST',
      body: JSON.stringify({ code }),
    });
    const data = await res.json();
    setExplanation(data.result);
    setLoading(false);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}> <GiBrain /> AI Kod Açıklayıcı</h1>
      <CodeInput code={code} setCode={setCode} />
      <button
        onClick={handleExplain}
        className={styles.button}
        disabled={loading}
      >
        {loading ? 'Açıklanıyor...' : 'Açıkla'}
      </button>
      <ExplanationOutput text={explanation} />
    </main>
  );
}

export default Home