import type { ReactNode } from 'react'
import { Placeholder } from './Placeholder'
import { Section, SectionHeading } from './Section'

const PROTOTYPE_PHOTO: string | null = null

function BatteryIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="7" width="17" height="10" rx="2" stroke="#1F7A3A" strokeWidth="2" />
      <rect x="20" y="10" width="2" height="4" rx="1" fill="#1F7A3A" />
      <rect x="5" y="10" width="8" height="4" rx="1" fill="#4CBB6C" />
    </svg>
  )
}

const COMPONENTS: { icon: ReactNode; color: string; name: string; desc: string }[] = [
  {
    icon: <BatteryIcon />,
    color: '#1F7A3A',
    name: 'Power bank 5 V',
    desc: "Alimente tout le montage. L'alimentation est filtrée localement pour que les modules ne se perturbent pas.",
  },
  {
    icon: '📶',
    color: '#4CBB6C',
    name: 'Carte ESP-12E (ESP8266)',
    desc: 'Lit les capteurs à tour de rôle et transmet les mesures au serveur par WiFi, toutes les 500 ms.',
  },
  {
    icon: '⚖️',
    color: '#D9822B',
    name: 'Cellule de charge et HX711',
    desc: "La cellule placée sous le bac mesure son poids. Le module HX711 convertit ce signal pour l'ESP8266.",
  },
  {
    icon: '🔊',
    color: '#F2C98B',
    name: 'Capteur ultrasonique HC-SR04',
    desc: "Fixé sous le couvercle, il mesure la distance jusqu'aux déchets, donc la hauteur de remplissage.",
  },
]

export function Prototype() {
  return (
    <Section id="prototype" tone="light">
      <SectionHeading
        tone="light"
        eyebrow="Le matériel"
        title="Le prototype"
        intro="Notre bac de démonstration contient quatre composants, montés dans un boîtier."
      />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {PROTOTYPE_PHOTO ? (
          <img src={PROTOTYPE_PHOTO} alt="Montage du prototype BacConnect dans son boîtier" className="w-full aspect-[4/3] object-cover rounded-2xl" />
        ) : (
          <Placeholder label="photo du montage réel du prototype dans son boîtier" className="aspect-[4/3]" />
        )}
        <div className="flex flex-col gap-6">
          {COMPONENTS.map(c => (
            <div key={c.name} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ backgroundColor: c.color + '22', border: `2px solid ${c.color}33` }} aria-hidden="true">
                {c.icon}
              </div>
              <div>
                <h3 className="font-bold mb-1 text-forest">{c.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 max-w-3xl mx-auto p-4 rounded-xl border-l-4 border-vivid bg-pale">
        <p className="text-sm font-medium text-forest">
          🏫 Un seul bac physique est réel : celui de notre prototype. Les autres bacs du tableau de bord sont générés par un simulateur côté backend.
        </p>
      </div>
    </Section>
  )
}
