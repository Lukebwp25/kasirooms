export const metadata = { title: "Kasirooms", description: "Seamless kasynoir" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        {/* Importo i CSS originali kasynoir */}
        <link rel="stylesheet" href="/css/kasynoir/base.css" />
        <link rel="stylesheet" href="/css/kasynoir/layout.css" />
        <link rel="stylesheet" href="/css/kasynoir/components.css" />
        <link rel="stylesheet" href="/css/kasynoir/theme.css" />
        <link rel="stylesheet" href="/css/overrides.css" />
      </head>
      <body>
        <div className="kn-shell">
          <header className="kn-header">
            <div className="kn-logo">Kasirooms</div>
            <nav className="kn-nav">
              <a href="/">Home</a>
              <a href="/lobby">Lobby</a>
              <a href="/wallet">Wallet</a>
              <a href="/profile">Profilo</a>
            </nav>
          </header>
          <main className="kn-main">{children}</main>
          <footer className="kn-footer">© {new Date().getFullYear()} Kasirooms</footer>
        </div>
      </body>
    </html>
  );
}