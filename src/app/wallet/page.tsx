'use client';
import { useEffect, useState } from 'react';

export default function Wallet() {
  const [balance, setBalance] = useState<number | null>(null);
  useEffect(() => {
    // demo: chiama il backend per saldo (userId_A dummy)
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/wallet/balance?userId_A=DEMO')
      .then(r => r.json()).then(d => setBalance(d?.newBalance ?? d?.balance ?? 0))
      .catch(() => setBalance(0));
  }, []);
  return (
    <section className="kn-container">
      <h1 className="kn-title">Wallet</h1>
      <p>Saldo: {balance ?? '...'}</p>
    </section>
  );
}