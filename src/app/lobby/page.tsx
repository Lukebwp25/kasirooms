export default function Lobby() {
  return (
    <section>
      <h1 className="kn-title">🎮 Gaming Lobby</h1>
      <p className="kn-subtitle">Scegli una stanza e inizia a giocare</p>
      
      <div className="kn-grid">
        <div className="kn-card">
          <h3>🎰 Slot Royale</h3>
          <p>Giocatori online: <strong>24</strong></p>
          <p>Jackpot attuale: <strong>€ 12,450</strong></p>
          <span className="kn-status success">Disponibile</span>
          <br /><br />
          <a className="kn-button" href="#join-slot">Entra ora</a>
        </div>
        
        <div className="kn-card">
          <h3>🃏 Poker VIP</h3>
          <p>Giocatori online: <strong>8</strong></p>
          <p>Buy-in minimo: <strong>€ 50</strong></p>
          <span className="kn-status warning">Posti limitati</span>
          <br /><br />
          <a className="kn-button" href="#join-poker">Entra ora</a>
        </div>
        
        <div className="kn-card">
          <h3>🎲 Roulette Live</h3>
          <p>Giocatori online: <strong>45</strong></p>
          <p>Dealer: <strong>Sofia</strong></p>
          <span className="kn-status success">Live ora</span>
          <br /><br />
          <a className="kn-button" href="#join-roulette">Entra ora</a>
        </div>
        
        <div className="kn-card">
          <h3>🏆 Torneo Blackjack</h3>
          <p>Partecipanti: <strong>12/16</strong></p>
          <p>Premio: <strong>€ 2,500</strong></p>
          <span className="kn-status error">Inizia tra 5 min</span>
          <br /><br />
          <a className="kn-button" href="#join-tournament">Partecipa</a>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a className="kn-button kn-button-secondary" href="/">← Torna alla Home</a>
      </div>
    </section>
  );
}