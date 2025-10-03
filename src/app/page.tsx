export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="kn-hero">
        <div className="kn-container">
          <h1 className="kn-hero-title">🎰 Kasirooms</h1>
          <p className="kn-hero-subtitle">
            La migliore esperienza di gaming online con slots, giochi da tavolo e live casino
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/lobby" className="kn-btn kn-btn-primary">
              🎮 Inizia a Giocare
            </a>
            <a href="/wallet" className="kn-btn kn-btn-secondary">
              💰 Gestisci Wallet
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="kn-container">
        <h2 className="text-2xl font-bold mb-6 text-center">Categorie di Gioco</h2>
        <div className="kn-categories">
          <a href="/lobby?category=slots" className="kn-category">
            <div className="kn-category-icon">🎰</div>
            <span className="kn-category-name">Slots</span>
          </a>
          <a href="/lobby?category=table" className="kn-category">
            <div className="kn-category-icon">♠️</div>
            <span className="kn-category-name">Table</span>
          </a>
          <a href="/lobby?category=live" className="kn-category">
            <div className="kn-category-icon">🎥</div>
            <span className="kn-category-name">Live Casino</span>
          </a>
          <a href="/lobby?category=poker" className="kn-category">
            <div className="kn-category-icon">🃏</div>
            <span className="kn-category-name">Video Poker</span>
          </a>
          <a href="/lobby?category=lottery" className="kn-category">
            <div className="kn-category-icon">🎲</div>
            <span className="kn-category-name">Lottery</span>
          </a>
          <a href="/lobby?category=virtual" className="kn-category">
            <div className="kn-category-icon">⚽</div>
            <span className="kn-category-name">Virtual Game</span>
          </a>
        </div>
      </section>

      {/* Featured Games */}
      <section className="kn-container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Giochi in Evidenza</h2>
          <a href="/lobby" className="kn-btn kn-btn-secondary">Vedi tutti</a>
        </div>
        
        <div className="kn-games-grid">
          {/* Slots */}
          <div className="kn-game-card">
            <div className="kn-game-image">🎰</div>
            <div className="kn-game-info">
              <h3 className="kn-game-title">Sweet Bonanza</h3>
              <p className="kn-game-provider">Pragmatic Play</p>
            </div>
          </div>
          
          <div className="kn-game-card">
            <div className="kn-game-image">💎</div>
            <div className="kn-game-info">
              <h3 className="kn-game-title">Diamond Rush</h3>
              <p className="kn-game-provider">Hacksaw Gaming</p>
            </div>
          </div>
          
          <div className="kn-game-card">
            <div className="kn-game-image">🔥</div>
            <div className="kn-game-info">
              <h3 className="kn-game-title">Fire Joker</h3>
              <p className="kn-game-provider">Play'n GO</p>
            </div>
          </div>
          
          <div className="kn-game-card">
            <div className="kn-game-image">⚡</div>
            <div className="kn-game-info">
              <h3 className="kn-game-title">Lightning Zeus</h3>
              <p className="kn-game-provider">Yggdrasil</p>
            </div>
          </div>
          
          {/* Table Games */}
          <div className="kn-game-card">
            <div className="kn-game-image">♠️</div>
            <div className="kn-game-info">
              <h3 className="kn-game-title">Blackjack Classic</h3>
              <p className="kn-game-provider">NetEnt</p>
            </div>
          </div>
          
          <div className="kn-game-card">
            <div className="kn-game-image">🎯</div>
            <div className="kn-game-info">
              <h3 className="kn-game-title">European Roulette</h3>
              <p className="kn-game-provider">Evolution</p>
            </div>
          </div>
          
          {/* Live Casino */}
          <div className="kn-game-card">
            <div className="kn-game-image">🎥</div>
            <div className="kn-game-info">
              <h3 className="kn-game-title">Live Baccarat</h3>
              <p className="kn-game-provider">Pragmatic Live</p>
            </div>
          </div>
          
          <div className="kn-game-card">
            <div className="kn-game-image">🎲</div>
            <div className="kn-game-info">
              <h3 className="kn-game-title">Mega Ball</h3>
              <p className="kn-game-provider">Evolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="kn-container">
        <div className="kn-card">
          <h2 className="kn-card-title text-center">Statistiche Platform</h2>
          <div className="kn-stats">
            <div className="kn-stat">
              <div className="kn-stat-value">500+</div>
              <div className="kn-stat-label">Giochi Disponibili</div>
            </div>
            <div className="kn-stat">
              <div className="kn-stat-value">50+</div>
              <div className="kn-stat-label">Providers</div>
            </div>
            <div className="kn-stat">
              <div className="kn-stat-value">24/7</div>
              <div className="kn-stat-label">Supporto Live</div>
            </div>
            <div className="kn-stat">
              <div className="kn-stat-value">€1M+</div>
              <div className="kn-stat-label">Jackpot Totali</div>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="kn-container">
        <h2 className="text-2xl font-bold mb-6 text-center">Providers di Qualità</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            'Pragmatic Play', 'NetEnt', 'Evolution', 'Hacksaw Gaming',
            'Play\'n GO', 'Yggdrasil', 'Microgaming', 'Red Tiger',
            'Push Gaming', 'Big Time Gaming', 'Nolimit City', 'ELK Studios'
          ].map((provider, index) => (
            <div key={index} className="kn-card text-center p-4">
              <div className="text-2xl mb-2">🎮</div>
              <div className="text-sm font-medium">{provider}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}