import { useState, useEffect, useRef } from 'react'
import logoWhite from './assets/img3.png'
import logoColor from './assets/img2.png'
import appIcon from './assets/img1.png'
import binIllustration from './assets/img4.png'
import appScreenshot1 from './assets/img7.png'
import appScreenshot2 from './assets/img8.png'
import groupPhoto from './assets/group-photo.png'

const NAV_LINKS = [
  { href: '#projet', label: 'Le projet' },
  { href: '#comment', label: 'Comment ça marche' },
  { href: '#application', label: "L'application" },
  { href: '#technologie', label: 'Technologie' },
  { href: '#equipe', label: 'Équipe' },
  { href: '#contact', label: 'Contact' },
]

function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const handler = () => setY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return y
}

function AnimatedBin({ pct, color }: { pct: number; color: string }) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = () => {
          start += 2
          if (start <= pct) { setDisplayed(start); requestAnimationFrame(step) }
          else setDisplayed(pct)
        }
        requestAnimationFrame(step)
        obs.disconnect()
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-20 rounded-b-xl overflow-hidden border-2" style={{ borderColor: color, backgroundColor: '#E7F3EA' }}>
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-300"
          style={{ height: `${displayed}%`, backgroundColor: color, opacity: 0.85 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-white drop-shadow">{displayed}%</span>
        </div>
      </div>
      <div className="w-18 h-2 rounded-full" style={{ backgroundColor: color, width: '4.5rem' }} />
    </div>
  )
}

export default function App() {
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = scrollY > 60

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F7F8F5', color: '#17211B' }}>

      {/* ── NAV ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(14,59,32,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.18)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#accueil" className="flex items-center gap-2">
            <img src={appIcon} alt="BacConnect" className="w-9 h-9 rounded-xl" />
            <span className="text-white font-extrabold text-lg tracking-tight">
              Bac<span style={{ color: '#4CBB6C' }}>Connect</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(v => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen
                ? <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                : <><path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>
              }
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ backgroundColor: 'rgba(14,59,32,0.97)' }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-white/90 font-medium text-sm py-1" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#0E3B20' }}>
        {/* background radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(76,187,108,0.12) 0%, transparent 70%)'
        }} />
        {/* gold dotted line decorative */}
        <div className="absolute top-1/2 left-0 right-0 h-px opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #F2C98B 0, #F2C98B 8px, transparent 8px, transparent 18px)'
        }} />

        <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 border" style={{ backgroundColor: 'rgba(76,187,108,0.12)', borderColor: 'rgba(76,187,108,0.35)', color: '#4CBB6C' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#4CBB6C' }} />
              Projet étudiant · Collège Ahuntsic
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Des bacs qui savent<br />
              <span style={{ color: '#4CBB6C' }}>quand ils sont pleins</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              BacConnect transforme la collecte des déchets en connectant chaque bac à un capteur intelligent.
              Fini les trajets inutiles — le gestionnaire sait exactement où et quand intervenir.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#comment" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all hover:scale-105" style={{ backgroundColor: '#1F7A3A' }}>
                Découvrir le projet
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#application" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border transition-all hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                Voir l'application
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { val: '3 s', label: 'Mise à jour temps réel' },
                { val: '3 états', label: 'Vert · Orange · Rouge' },
                { val: 'ESP8266', label: 'Capteur embarqué' },
              ].map(s => (
                <div key={s.val} className="text-center">
                  <div className="text-2xl font-black" style={{ color: '#4CBB6C' }}>{s.val}</div>
                  <div className="text-xs text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border opacity-20 animate-ping" style={{ borderColor: '#4CBB6C', animationDuration: '2.5s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border opacity-15 animate-ping" style={{ borderColor: '#4CBB6C', animationDuration: '2s', animationDelay: '0.5s' }} />
              <img src={binIllustration} alt="Bac connecté" className="relative w-56 md:w-72 drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs font-medium tracking-widest uppercase">Défiler</span>
          <div className="w-px h-8 animate-pulse" style={{ backgroundColor: '#4CBB6C' }} />
        </div>
      </section>

      {/* ── PROBLÈME ── */}
      <section id="projet" className="py-24 px-6" style={{ backgroundColor: '#F7F8F5' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#1F7A3A' }}>Le constat</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black" style={{ color: '#0E3B20' }}>Un problème bien réel</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#17211B', opacity: 0.65 }}>
              Aujourd'hui, les camions passent selon un horaire fixe — que les bacs soient pleins ou vides.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚛',
                title: 'Trajets inutiles',
                desc: 'Des camions parcourent des kilomètres pour vider des bacs à moitié pleins. Carburant gaspillé, CO₂ émis pour rien.',
                accent: '#1F7A3A',
              },
              {
                icon: '♻️',
                title: 'Bacs qui débordent',
                desc: 'Entre deux passages, certains bacs dépassent leur capacité : odeurs, déchets au sol et plaintes des citoyens.',
                accent: '#D9822B',
              },
              {
                icon: '⚠️',
                title: 'Risque pour les employés',
                desc: "Des bacs trop lourds sont dangereux à soulever. Sans données de poids, impossible de détecter le problème à l'avance.",
                accent: '#C8402F',
              },
            ].map(c => (
              <div key={c.title} className="rounded-2xl p-7 border flex flex-col gap-4" style={{ backgroundColor: 'white', borderColor: '#E7F3EA' }}>
                <div className="text-4xl">{c.icon}</div>
                <h3 className="text-xl font-bold" style={{ color: '#0E3B20' }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#17211B', opacity: 0.7 }}>{c.desc}</p>
                <div className="h-1 w-12 rounded-full mt-auto" style={{ backgroundColor: c.accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section id="comment" className="py-24 px-6" style={{ backgroundColor: '#0E3B20' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4CBB6C' }}>Le fonctionnement</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">Comment ça marche ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0 relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-px" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #F2C98B 0, #F2C98B 8px, transparent 8px, transparent 16px)'
            }} />
            {[
              {
                step: '01',
                title: 'Mesurer',
                icon: '📡',
                desc: "L'ESP8266 lit le poids via la balance HX711 et la hauteur des déchets via le capteur laser VL53L0X toutes les 3 secondes.",
              },
              {
                step: '02',
                title: 'Analyser',
                icon: '🖥️',
                desc: "Le serveur BacConnect convertit les données en kilogrammes et en pourcentage de remplissage, puis applique la règle de collecte.",
              },
              {
                step: '03',
                title: 'Agir',
                icon: '📱',
                desc: "L'app affiche les bacs à ramasser (rouge), les alertes (orange), et les zones critiques. Le gestionnaire planifie au bon moment.",
              },
            ].map((s, i) => (
              <div key={s.step} className={`flex flex-col items-center text-center px-6 ${i === 1 ? 'md:scale-105' : ''}`}>
                <div className="w-28 h-28 rounded-full flex items-center justify-center text-5xl mb-6 border-4" style={{ backgroundColor: 'rgba(76,187,108,0.1)', borderColor: 'rgba(76,187,108,0.3)' }}>
                  {s.icon}
                </div>
                <div className="text-xs font-bold mb-2" style={{ color: '#F2C98B' }}>ÉTAPE {s.step}</div>
                <h3 className="text-xl font-black text-white mb-4">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÈGLE DE RAMASSAGE ── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F7F8F5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#1F7A3A' }}>Intelligence embarquée</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black" style={{ color: '#0E3B20' }}>La règle de ramassage</h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#17211B', opacity: 0.65 }}>
              Chaque bac passe par trois états selon son poids et son niveau de remplissage.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                color: '#4CBB6C',
                bg: '#E7F3EA',
                border: '#4CBB6C',
                label: 'VERT',
                title: 'Normal',
                pct: 45,
                desc: 'Le bac se remplit progressivement. Aucune action requise, la collecte est planifiée selon le calendrier habituel.',
              },
              {
                color: '#D9822B',
                bg: '#FFF3E8',
                border: '#D9822B',
                label: 'ORANGE',
                title: 'Avertissement',
                pct: 75,
                desc: 'Le bac atteint 100–120 % de son poids maximal. Alerte envoyée au gestionnaire, collecte recommandée prochainement.',
              },
              {
                color: '#C8402F',
                bg: '#FDE8E6',
                border: '#C8402F',
                label: 'ROUGE',
                title: 'Collecte nécessaire',
                pct: 100,
                desc: "Le bac atteint 100 % de sa hauteur ou dépasse 120 % de son poids maximal. Ramassage immédiat requis — risque de débordement ou de blessure.",
              },
            ].map(s => (
              <div key={s.label} className="rounded-2xl p-7 border-2 flex flex-col gap-5" style={{ backgroundColor: s.bg, borderColor: s.border }}>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black text-white" style={{ backgroundColor: s.color }}>{s.label}</span>
                  <AnimatedBin pct={s.pct} color={s.color} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0E3B20' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#17211B', opacity: 0.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION ── */}
      <section id="application" className="py-24 px-6" style={{ backgroundColor: '#0E3B20' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4CBB6C' }}>L'outil de gestion</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">L'application mobile</h2>
            <p className="mt-4 text-base text-white/60 max-w-xl mx-auto">
              React Native / Expo — disponible iOS et Android. Tout en temps réel, toutes les 3 secondes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center gap-4">
              <div className="w-44 rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: 'rgba(76,187,108,0.3)' }}>
                <img src={appScreenshot1} alt="Tableau de bord" className="w-full" />
              </div>
              <div className="w-44 rounded-3xl overflow-hidden shadow-2xl border-4 self-end" style={{ borderColor: 'rgba(76,187,108,0.3)' }}>
                <img src={appScreenshot2} alt="Gestion des bacs" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {[
                { icon: '📊', title: 'Tableau de bord', desc: 'Vue globale : nombre de bacs pleins, zones critiques, visualisation animée du bac prototype avec jauge de poids et niveau.' },
                { icon: '📋', title: 'Liste des bacs', desc: 'Bordures colorées (vert · orange · rouge) pour repérer en un coup d\'œil. Filtre "Prêts pour la collecte" intégré.' },
                { icon: '⚙️', title: 'Gestion & calibrage', desc: 'Ajouter, modifier, supprimer un bac. Calibrage guidé en 5 étapes avec lecture directe du capteur ou saisie manuelle.' },
                { icon: '🗺️', title: 'Gestion des zones', desc: 'Créer une zone, régler son seuil de déclenchement. Les zones CRITIQUE apparaissent en premier sur le tableau de bord.' },
              ].map(f => (
                <div key={f.title} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">{f.title}</h4>
                    <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LE BAC CONNECTÉ ── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F7F8F5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#1F7A3A' }}>Le matériel</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black" style={{ color: '#0E3B20' }}>Le bac connecté</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full" style={{ backgroundColor: 'rgba(76,187,108,0.07)' }} />
              </div>
              <img src={binIllustration} alt="Bac connecté" className="relative w-64 md:w-80 drop-shadow-xl" />
            </div>
            <div className="flex flex-col gap-6">
              {[
                { icon: '📶', color: '#4CBB6C', name: 'Microcontrôleur ESP8266', desc: 'Connexion Wi-Fi. Envoie les données au serveur toutes les 3 secondes.' },
                { icon: '🔦', color: '#F2C98B', name: 'Capteur laser VL53L0X', desc: "Mesure la hauteur des déchets depuis le dessous du couvercle." },
                { icon: '⚖️', color: '#D9822B', name: 'Balance HX711', desc: "Capteur de poids sous le bac. Détecte les surcharges avant qu'elles deviennent dangereuses." },
              ].map(c => (
                <div key={c.name} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: c.color + '22', border: `2px solid ${c.color}33` }}>
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#0E3B20' }}>{c.name}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 p-4 rounded-xl border-l-4" style={{ backgroundColor: '#E7F3EA', borderColor: '#4CBB6C' }}>
                <p className="text-sm font-medium" style={{ color: '#0E3B20' }}>
                  🏫 Un prototype réel est installé au <strong>Cégep Ahuntsic</strong> (Montréal). Les autres bacs de la démo sont simulés par le serveur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIE ── */}
      <section id="technologie" className="py-24 px-6" style={{ backgroundColor: '#0E3B20' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4CBB6C' }}>Sous le capot</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">Les technologies</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'React Native', sub: 'Expo', emoji: '⚛️' },
              { name: 'Node.js', sub: 'Express · REST', emoji: '🟩' },
              { name: 'MySQL', sub: 'Aiven (cloud)', emoji: '🗄️' },
              { name: 'ESP8266', sub: 'C++ / Arduino', emoji: '🔌' },
              { name: 'Render', sub: 'Hébergement', emoji: '☁️' },
            ].map(t => (
              <div key={t.name} className="flex flex-col items-center text-center p-5 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}>
                <span className="text-3xl mb-3">{t.emoji}</span>
                <span className="font-bold text-white text-sm">{t.name}</span>
                <span className="text-xs text-white/40 mt-1">{t.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BÉNÉFICES ── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F7F8F5' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#1F7A3A' }}>Impact</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black" style={{ color: '#0E3B20' }}>Les bénéfices</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: '🌿', title: 'Moins de CO₂', desc: 'Moins de trajets inutiles = économies de carburant et réduction de l\'empreinte carbone de la collecte.' },
              { icon: '🏙️', title: 'Villes plus propres', desc: 'Fini les bacs qui débordent. Une collecte au bon moment garde les espaces publics impeccables.' },
              { icon: '🦺', title: 'Sécurité des employés', desc: 'Alerte automatique dès qu\'un bac dépasse 120 % de son poids maximal — avant que quelqu\'un se blesse.' },
              { icon: '📈', title: 'Décisions basées sur les données', desc: 'Tableaux de bord en temps réel par zone, par type de déchet. On sait où et quand intervenir.' },
            ].map(b => (
              <div key={b.title} className="flex gap-4 p-6 rounded-2xl border bg-white" style={{ borderColor: '#E7F3EA' }}>
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#0E3B20' }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#17211B', opacity: 0.65 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ── */}
      <section id="equipe" className="py-24 px-6" style={{ backgroundColor: '#0E3B20' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 mx-auto max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4CBB6C' }}>Les créateurs</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">L'équipe</h2>
              <p className="mt-4 text-white/60 text-base max-w-xl">
                Trois étudiants du <strong className="text-white">Collège Ahuntsic</strong> (Montréal) en{' '}
                <a href="https://www.collegeahuntsic.qc.ca/formation-continue/aec-intensives/developpement-dapplications-mobiles" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-300" style={{ color: '#4CBB6C' }}>
                  AEC Développement d'applications mobiles
                </a>
                .
              </p>
            </div>

            <div className="aspect-[9/16] h-64 shrink-0 rounded-2xl overflow-hidden border-2" style={{ borderColor: 'rgba(76,187,108,0.3)' }}>
              <img src={groupPhoto} alt="L'équipe BacConnect : Elda, Hadjer et Tertullien" className="h-full w-full scale-[1.4] object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Elda Wamba', role: 'Développement mobile · React Native / Expo', initial: 'EW' },
              { name: 'Hadjer Ait Hadi', role: 'Développement mobile · React Native / Expo', initial: 'HA' },
              { name: 'Tertullien Koumetio', role: 'Objet connecté · ESP8266 / C++ & backend Node.js', initial: 'TK' },
            ].map(m => (
              <div key={m.name} className="flex flex-col items-center text-center p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-4 border-2" style={{ backgroundColor: 'rgba(76,187,108,0.15)', borderColor: 'rgba(76,187,108,0.4)', color: '#4CBB6C' }}>
                  {m.initial}
                </div>
                <h3 className="font-bold text-white mb-2">{m.name}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{m.role}</p>
                {/* Photo placeholder */}
                <div className="mt-4 w-full rounded-xl p-3 border border-dashed flex items-center justify-center gap-2" style={{ borderColor: 'rgba(76,187,108,0.25)', backgroundColor: 'rgba(76,187,108,0.04)' }}>
                  <span className="text-white/30 text-xs">Photo à ajouter</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / FOOTER ── */}
      <footer id="contact" className="py-16 px-6 border-t" style={{ backgroundColor: '#F7F8F5', borderColor: '#E7F3EA' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logoColor} alt="BacConnect" className="h-12 object-contain" />
            <p className="text-sm text-center md:text-left" style={{ color: '#17211B', opacity: 0.5 }}>
              Projet étudiant · Collège Ahuntsic, Montréal<br />
              Programme AEC Développement d'applications mobiles
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://www.collegeahuntsic.qc.ca/formation-continue/aec-intensives/developpement-dapplications-mobiles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: '#1F7A3A' }}
            >
              Notre formation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <p className="text-xs" style={{ color: '#17211B', opacity: 0.35 }}>© 2025 BacConnect — Collège Ahuntsic</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
