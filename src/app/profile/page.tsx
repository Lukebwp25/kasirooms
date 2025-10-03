'use client';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [player, setPlayer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/player/info?playerId=DEMO')
      .then(r => r.json())
      .then(d => {
        setPlayer(d);
        setLoading(false);
      })
      .catch(() => {
        setPlayer({
          playerId: 'DEMO',
          status: 'ACTIVE',
          limits: { daily: 1000, monthly: 10000 }
        });
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h1 className="kn-title">👤 Il tuo Profilo</h1>
      <p className="kn-subtitle">Gestisci le tue informazioni e preferenze</p>
      
      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div>Caricamento...</div>
        </div>
      ) : (
        <>
          <div className="profile-info" style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Informazioni Account</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <strong>Player ID:</strong><br />
                <span style={{ color: '#666' }}>{player?.playerId || 'N/A'}</span>
              </div>
              <div>
                <strong>Status:</strong><br />
                <span className={`kn-status ${player?.status === 'ACTIVE' ? 'success' : 'warning'}`}>
                  {player?.status || 'Unknown'}
                </span>
              </div>
              <div>
                <strong>Limite Giornaliero:</strong><br />
                <span style={{ color: '#666' }}>€ {player?.limits?.daily || 'N/A'}</span>
              </div>
              <div>
                <strong>Limite Mensile:</strong><br />
                <span style={{ color: '#666' }}>€ {player?.limits?.monthly || 'N/A'}</span>
              </div>
            </div>
          </div>
          
          <div className="kn-grid">
            <div className="kn-card">
              <h3>⚙️ Impostazioni</h3>
              <p>Configura le preferenze del tuo account</p>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                  <input type="checkbox" defaultChecked /> Notifiche email
                </label>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                  <input type="checkbox" defaultChecked /> Notifiche push
                </label>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>
                  <input type="checkbox" /> Modalità privata
                </label>
              </div>
              <a className="kn-button" href="#settings">Salva</a>
            </div>
            
            <div className="kn-card">
              <h3>🛡️ Sicurezza</h3>
              <p>Gestisci la sicurezza del tuo account</p>
              <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
                • Ultimo accesso: Oggi, 14:32<br />
                • 2FA: Attivo ✓<br />
                • Password: Cambiata 15 giorni fa
              </div>
              <a className="kn-button kn-button-secondary" href="#security">Gestisci</a>
            </div>
            
            <div className="kn-card">
              <h3>📈 Statistiche</h3>
              <p>Le tue statistiche di gioco</p>
              <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#666' }}>
                • Sessioni totali: 47<br />
                • Tempo di gioco: 23h 45m<br />
                • Gioco preferito: Slot Royale<br />
                • Vincita massima: € 850,00
              </div>
              <a className="kn-button kn-button-secondary" href="#stats">Dettagli</a>
            </div>
          </div>
        </>
      )}
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a className="kn-button kn-button-secondary" href="/">← Torna alla Home</a>
      </div>
    </section>
  );
}