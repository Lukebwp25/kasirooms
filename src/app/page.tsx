export default function Home() {
  return (
    <section className="kn-container">
      <h1 className="kn-title">Videochat</h1>
      <p>Benvenuto. Accedi dalla lobby e scegli una stanza.</p>
      <div className="kn-grid">
        <a className="kn-card" href="/lobby">Entra in Lobby</a>
        <a className="kn-card" href="/wallet">Apri Wallet</a>
        <a className="kn-card" href="/profile">Profilo</a>
      </div>
    </section>
  );
}