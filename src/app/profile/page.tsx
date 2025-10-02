'use client';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [player, setPlayer] = useState<any>(null);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/v1/player/info?playerId=DEMO')
      .then(r => r.json()).then(d => setPlayer(d?.player))
      .catch(() => setPlayer(null));
  }, []);
  return (
    <section className="kn-container">
      <h1 className="kn-title">Profilo</h1>
      <pre>{JSON.stringify(player, null, 2)}</pre>
    </section>
  );
}