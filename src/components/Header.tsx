import { useEffect, useState } from 'react'
import appIcon from '../assets/img1.png'

const NAV_LINKS = [
  { href: '#a-propos', label: 'Le projet' },
  { href: '#comment', label: 'Fonctionnement' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#application', label: "L'application" },
  { href: '#demo', label: 'Démo' },
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

export function Header() {
  const scrolled = useScrollY() > 60
  const [menuOpen, setMenuOpen] = useState(false)

  return (
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
          <img src={appIcon} alt="" className="w-9 h-9 rounded-xl" />
          <span className="text-white font-extrabold text-lg tracking-tight">
            Bac<span className="text-vivid">Connect</span>
          </span>
        </a>
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="lg:hidden text-white p-2"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen(v => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {menuOpen
              ? <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            }
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav id="menu-mobile" aria-label="Navigation principale" className="lg:hidden px-6 pb-4 flex flex-col gap-3" style={{ backgroundColor: 'rgba(14,59,32,0.97)' }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-white/90 font-medium text-sm py-1" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
