export const metadata = { title: "Kasirooms", description: "Seamless kasynoir" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        {/* CSS di base per il layout */}
        <link rel="stylesheet" href="/css/base.css" />
        {/* CSS componenti Kasinoir */}
        <link rel="stylesheet" href="/css/kasynoir/CSS_KASINOIR/index.D6twYbTH.css" />
        <link rel="stylesheet" href="/css/kasynoir/CSS_KASINOIR/default.BpbZ33Kg.css" />
        <link rel="stylesheet" href="/css/kasynoir/CSS_KASINOIR/Card.BuYAcs1L.css" />
        <link rel="stylesheet" href="/css/kasynoir/CSS_KASINOIR/Footer.BK6fxZ5F.css" />
        {/* Override personalizzati */}
        <link rel="stylesheet" href="/css/overrides.css" />
      </head>
      <body>
        <div className="kn-shell">
          <header className="kn-header">
            <div className="kn-container">
              <div className="kn-header-content">
                <div className="kn-logo">🎰 Kasirooms</div>
                <nav className="kn-nav">
                  <a href="/" className="kn-nav-link">Home</a>
                  <a href="/lobby" className="kn-nav-link">Lobby</a>
                  <a href="/wallet" className="kn-nav-link">Wallet</a>
                  <a href="/profile" className="kn-nav-link">Profilo</a>
                </nav>
              </div>
            </div>
          </header>
          <main className="kn-main">
            <div className="kn-container">
              {children}
            </div>
          </main>
          <footer className="kn-footer">
            <div className="kn-container">
              <p>© {new Date().getFullYear()} Kasirooms - Powered by Sirplay</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}