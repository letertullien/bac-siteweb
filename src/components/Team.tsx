import { Placeholder } from './Placeholder'
import { Section, SectionHeading } from './Section'

type Member = {
  name: string
  firstName: string
  initials: string
  role: string
  contribution: string
  photo: string | null
  bio: string | null
}

const MEMBERS: Member[] = [
  {
    name: 'Tertullien KOUMETIO TANE',
    firstName: 'Tertullien',
    initials: 'TK',
    role: 'Électronique · Prototype du bac',
    contribution: 'Conception et montage du prototype : alimentation, ESP8266, HX711 et HC-SR04. Programmation de la lecture alternée des capteurs et de la transmission des mesures par WiFi.',
    photo: null,
    bio: null,
  },
  {
    name: 'Elda WAMBA',
    firstName: 'Elda',
    initials: 'EW',
    role: 'Backend · API REST Node.js / Express et base MySQL',
    contribution: "Conception de l'API REST et de la base de données MySQL. Calcul du remplissage, décision de ramassage et simulateur qui génère les autres bacs du tableau de bord.",
    photo: null,
    bio: null,
  },
  {
    name: 'Hadjer AIT HADI',
    firstName: 'Hadjer',
    initials: 'HA',
    role: 'Frontend · Application mobile React Native / Expo',
    contribution: "Conception des écrans de gestion des bacs et des zones, ainsi que du tableau de bord. Réalisation de l'assistant de calibrage en 5 étapes et de l'authentification simple.",
    photo: null,
    bio: null,
  },
]

export function Team() {
  return (
    <Section id="equipe" tone="light">
      <SectionHeading
        tone="light"
        eyebrow="Les membres"
        title="L'équipe"
        intro={
          <>
            Nous sommes trois étudiants de l'
            <a href="https://www.collegeahuntsic.qc.ca/formation-continue/aec-intensives/developpement-dapplications-mobiles" target="_blank" rel="noopener noreferrer" className="underline text-medium hover:text-forest">
              AEC Développement d'applications mobiles
            </a>{' '}
            du Collège Ahuntsic, à Montréal.
          </>
        }
      />
      <div className="grid md:grid-cols-3 gap-6">
        {MEMBERS.map(m => (
          <div key={m.name} className="flex flex-col gap-4">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-pale bg-white h-full">
              {m.photo ? (
                <img src={m.photo} alt={m.name} className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-vivid" />
              ) : (
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black mb-4 border-2 bg-pale border-vivid text-medium">
                  {m.initials}
                </div>
              )}
              <h3 className="font-bold text-forest">{m.name}</h3>
              <p className="mt-1 text-xs font-semibold text-medium">{m.role}</p>
              <p className="mt-4 mb-6 text-sm leading-relaxed text-text/70">{m.contribution}</p>
              {!m.photo && (
                <Placeholder label={`photo de ${m.firstName}, format carré`} className="mt-auto w-full max-w-40 aspect-square" />
              )}
            </div>
            {m.bio ? (
              <p className="text-sm leading-relaxed text-text/70 px-2">{m.bio}</p>
            ) : (
              <Placeholder label={`présentation personnelle de ${m.firstName} à venir (3 ou 4 phrases)`} />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
