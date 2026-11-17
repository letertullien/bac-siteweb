import groupPhoto from '../assets/group-photo.png'
import tertullienPhoto from '../assets/Tertullien_web.jpg'
import hadjerPhoto from '../assets/Hadjer_web.jpg'
import eldaPhoto from '../assets/Elda_web.jpg'
import { Placeholder } from './Placeholder'
import { Section } from './Section'

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
    contribution: 'Conception et montage du prototype : alimentation, ESP8266, HX711 et HC-SR04. Programmation de la lecture alternée des capteurs et de la transmission des mesures par Internet.',
    photo: tertullienPhoto,
    bio: "Je m'appelle Tertullien. Avant l'AEC, j'ai passé neuf ans à concevoir et à réparer des balances électroniques industrielles, alors mesurer une masse avec précision, c'est un peu mon terrain de jeu. Dans BacConnect, j'ai pris en charge l'électronique : j'ai monté le prototype et fait parler les capteurs avec l'application. Ce que j'ai le plus aimé, c'est voir mon ancien métier et mon nouveau se rencontrer dans un même projet.",
  },
  {
    name: 'Hadjer AIT HADI',
    firstName: 'Hadjer',
    initials: 'HA',
    role: 'Frontend · Application mobile React Native / Expo',
    contribution: "Conception des écrans de gestion des bacs et des zones, ainsi que du tableau de bord. Réalisation de l'assistant de calibrage en 5 étapes et de l'authentification simple.",
    photo: hadjerPhoto,
    bio: "Je m'appelle Hadjer Ait Hadi. Avant l'AEC, j'ai étudié en construction mécanique, ce qui m'a appris comment les choses sont conçues. Dans BacConnect, j'ai pris en charge le frontend : l'interface qui affiche la masse et la profondeur du bac. Ma plus grande satisfaction, c'est de voir BacConnect prendre vie grâce au travail de toute l'équipe.",
  },
  {
    name: 'Elda WAMBA',
    firstName: 'Elda',
    initials: 'EW',
    role: 'Backend · API REST Node.js / Express et base MySQL',
    contribution: "Conception de l'API REST et de la base de données MySQL. Calcul du remplissage, décision de ramassage et simulateur qui génère les autres bacs du tableau de bord.",
    photo: eldaPhoto,
    bio: "Je m'appelle Elda Wamba. Avant l'AEC, j'étais déjà photographe, vidéaste et community manager : j'aidais les entreprises à créer et à gérer leur contenu sur les réseaux sociaux, ce qui m'a mené à fonder Wamba Studio Inc. Dans BacConnect, j'ai pris en charge le backend : l'API et la base de données qui reçoivent les mesures des capteurs et les envoient à l'application. Ce que j'ai le plus aimé, c'est de passer de l'autre côté de l'écran et de construire ce qui fait fonctionner une application, plutôt que seulement ce qu'on voit.",
  },
]

export function Team() {
  return (
    <Section id="equipe" tone="dark">
      <div className="mb-12 mx-auto max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="text-sm font-semibold tracking-widest uppercase text-vivid">Les créateurs</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">L'équipe</h2>
          <p className="mt-4 text-white/60 text-base max-w-xl">
            Trois étudiants du <strong className="text-white">Collège Ahuntsic</strong> (Montréal) en{' '}
            <a href="https://www.collegeahuntsic.qc.ca/formation-continue/aec-intensives/developpement-dapplications-mobiles" target="_blank" rel="noopener noreferrer" className="underline text-vivid hover:text-green-300">
              AEC Développement d'applications mobiles
            </a>
            .
          </p>
        </div>
        <div className="aspect-[9/16] h-64 shrink-0 rounded-2xl overflow-hidden border-2" style={{ borderColor: 'rgba(76,187,108,0.3)' }}>
          <img src={groupPhoto} alt="L'équipe BacConnect : Tertullien, Elda et Hadjer" className="h-full w-full scale-[1.4] object-cover" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-x-6 gap-y-4">
        {MEMBERS.map(m => (
          <div key={m.name} className="grid grid-rows-subgrid row-span-2 mb-6 md:mb-0">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}>
              {m.photo ? (
                <div className="w-44 max-w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 border-2 border-vivid">
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top" />
                </div>
              ) : (
                <div className="w-44 max-w-full aspect-[4/5] rounded-2xl flex items-center justify-center text-4xl font-black mb-4 border-2 border-vivid text-vivid" style={{ backgroundColor: 'rgba(76,187,108,0.15)' }}>
                  {m.initials}
                </div>
              )}
              <h3 className="font-bold text-white">{m.name}</h3>
              <p className="mt-1 text-xs font-semibold text-vivid">{m.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/65">{m.contribution}</p>
            </div>
            {m.bio ? (
              <blockquote className="relative rounded-2xl border border-white/10 border-l-4 border-l-vivid p-6 pt-12" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                <svg className="absolute top-4 left-5 h-6 w-8 text-vivid" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
                  <path d="M0 24V14C0 6.3 4.2 1.6 12.6 0l1.4 3.2C9.2 4.6 6.9 7.3 6.6 11H13v13H0zm18 0V14c0-7.7 4.2-12.4 12.6-14L32 3.2c-4.8 1.4-7.1 4.1-7.4 7.8H31v13H18z" />
                </svg>
                <p className="text-sm leading-relaxed italic text-white/85">{m.bio}</p>
              </blockquote>
            ) : (
              <Placeholder label={`présentation personnelle de ${m.firstName} à venir (3 ou 4 phrases)`} tone="dark" className="h-full min-h-40 rounded-2xl!" />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
