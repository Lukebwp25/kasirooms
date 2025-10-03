'use client';
import { useEffect, useState } from 'react';

export default function Wallet() {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // demo: chiama il backend per saldo (userId_A dummy)
    fetch('/api/wallet/balance?userId_A=DEMO')
      .then(r => {
        if (!r.ok) throw new Error('Errore nel caricamento');
        return r.json();
      })
      .then(d => {
        setBalance(d?.newBalance ?? d?.balance ?? 1250.50); // Fallback demo
        setLoading(false);
      })
      .catch((err) => {
        console.error('Wallet error:', err);
        setBalance(1250.50); // Demo balance
        setError('Modalità demo');
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h1 className="kn-title">💰 Il tuo Wallet</h1>
      <p className="kn-subtitle">Gestisci il tuo saldo e le transazioni</p>
      
      <div className="wallet-overview" style={{ 
        background: 'white', 
        borderRadius: '12px', 
        padding: '2rem', 
        textAlign: 'center',
        marginBottom: '2rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Saldo Disponibile</h2>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>
          {loading ? '...' : `€ ${balance?.toFixed(2)}`}
        </div>
        {error && <div style={{ color: '#856404', marginTop: '0.5rem' }}>⚠️ {error}</div>}
      </div>
      
      <div className="kn-grid">
        <div className="kn-card">
          <h3>💳 Deposita</h3>
          <p>Aggiungi fondi al tuo wallet in modo sicuro</p>
          <div style={{ marginBottom: '1rem' }}>
            <input 
              type="number" 
              placeholder="Importo €" 
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                marginBottom: '0.5rem'
              }} 
            />
          </div>
          <a className="kn-button" href="#deposit">Deposita</a>
        </div>
        
        <div className="kn-card">
          <h3>💸 Preleva</h3>
          <p>Ritira i tuoi fondi sul conto bancario</p>
          <div style={{ marginBottom: '1rem' }}>
            <input 
              type="number" 
              placeholder="Importo €" 
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                marginBottom: '0.5rem'
              }} 
            />
          </div>
          <a className="kn-button" href="#withdraw">Preleva</a>
        </div>
        
        <div className="kn-card">
          <h3>📊 Storico</h3>
          <p>Visualizza tutte le tue transazioni</p>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>
              • Deposito: +€ 500,00<br />
              • Vincita Slot: +€ 750,50<br />
              • Puntata Poker: -€ 200,00
            </div>
          </div>
          <a className="kn-button kn-button-secondary" href="#history">Vedi tutto</a>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a className="kn-button kn-button-secondary" href="/">← Torna alla Home</a>
      </div>
    </section>
  );
}