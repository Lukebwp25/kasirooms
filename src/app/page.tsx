export default function Home() {
  return (
    <section>
      <div className="hero-section">
        <h1 className="kn-title">🎰 Benvenuto in Kasirooms</h1>
        <p className="kn-subtitle">La piattaforma gaming di nuova generazione</p>
        <div className="hero-actions">
          <a className="kn-button" href="/lobby">Entra in Lobby</a>
          <a className="kn-button kn-button-secondary" href="/profile">Il tuo Profilo</a>
        </div>
      </div>

      <div className="features-section">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Scopri le nostre funzionalità</h2>
        <div className="kn-grid">
          <div className="kn-card">
            <h3>🎮 Gaming Lobby</h3>
            <p>Accedi alle stanze di gioco, partecipa a tornei e sfida altri giocatori</p>
            <a className="kn-button" href="/lobby">Entra ora</a>
          </div>
          
          <div className="kn-card">
            <h3>💰 Wallet Digitale</h3>
            <p>Gestisci il tuo saldo, depositi e prelievi in modo sicuro e veloce</p>
            <a className="kn-button" href="/wallet">Apri Wallet</a>
          </div>
          
          <div className="kn-card">
            <h3>👤 Profilo Utente</h3>
            <p>Personalizza il tuo profilo, visualizza statistiche e gestisci le impostazioni</p>
            <a className="kn-button" href="/profile">Vai al Profilo</a>
          </div>
        </div>
      </div>

      <div className="api-status">
        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>🔧 Status Sistema</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="kn-status success">API Health ✓</span>
          <span className="kn-status success">Database ✓</span>
          <span className="kn-status warning">Sirplay Integration ⚠️</span>
        </div>
      </div>
    </section>
  );
}