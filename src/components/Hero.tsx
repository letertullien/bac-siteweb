import binIllustration from '../assets/img4.png'

const STATS = [
  { val: '500 ms', label: 'Fréquence de mesure' },
  { val: '3 états', label: 'Vert · Orange · Rouge' },
  { val: 'ESP8266', label: 'Microcontrôleur du bac' },
]

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden bg-forest">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 60% at 60% 50%, rgba(76,187,108,0.12) 0%, transparent 70%)'
      }} />
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-20" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #F2C98B 0, #F2C98B 8px, transparent 8px, transparent 18px)'
      }} />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 border text-vivid" style={{ backgroundColor: 'rgba(76,187,108,0.12)', borderColor: 'rgba(76,187,108,0.35)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse bg-vivid" />
            Projet intégrateur · Collège Ahuntsic
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Des bacs qui savent<br />
            <span className="text-vivid">quand ils sont pleins</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            Nous avons construit un prototype de bac qui mesure son poids et la hauteur de ses déchets.
            Une application mobile affiche l'état de chaque bac. Le gestionnaire peut ainsi décider quand faire la collecte.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#a-propos" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-medium transition-all hover:scale-105">
              Découvrir le projet
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="#application" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border text-white transition-all hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
              Voir l'application
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map(s => (
              <div key={s.val} className="flex items-baseline gap-3 sm:block sm:text-center">
                <div className="text-2xl font-black text-vivid">{s.val}</div>
                <div className="text-xs text-white/50 sm:mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center relative">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border opacity-20 animate-ping border-vivid" style={{ animationDuration: '2.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border opacity-15 animate-ping border-vivid" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
            <img src={binIllustration} alt="Illustration d'un bac connecté" className="relative w-56 md:w-72 drop-shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40" aria-hidden="true">
        <span className="text-xs font-medium tracking-widest uppercase">Défiler</span>
        <div className="w-px h-8 animate-pulse bg-vivid" />
      </div>
    </section>
  )
}
