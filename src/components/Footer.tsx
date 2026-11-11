import logoDark from '../assets/img3.png'

const EMAIL = 'letertulliensolution@gmail.com'
const PHONE_DISPLAY = '263 993-8972'
const PHONE_LINK = '+12639938972'

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 py-16 px-6 bg-forest border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3 md:items-start text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={logoDark} alt="BacConnect, bacs intelligents" className="h-12 object-contain" />
          <p className="text-sm text-white/50">
            Projet intégrateur · Collège Ahuntsic, Montréal<br />
            AEC Développement d'applications mobiles
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-vivid mb-1">Contact</h2>
          <a href={`mailto:${EMAIL}`} className="text-sm text-white/80 hover:text-white underline break-all">{EMAIL}</a>
          <a href={`tel:${PHONE_LINK}`} className="text-sm text-white/80 hover:text-white underline">{PHONE_DISPLAY}</a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <a
            href="https://www.collegeahuntsic.qc.ca/formation-continue/aec-intensives/developpement-dapplications-mobiles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-medium transition-all hover:scale-105"
          >
            Notre formation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <p className="text-xs text-white/35">© 2026 BacConnect, Collège Ahuntsic</p>
        </div>
      </div>
    </footer>
  )
}
