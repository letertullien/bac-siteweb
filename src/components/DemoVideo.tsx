import demoVideo from '../assets/BacConnect.mp4'
import { Section, SectionHeading } from './Section'

export function DemoVideo() {
  return (
    <Section id="demo" tone="light">
      <SectionHeading
        tone="light"
        eyebrow="Démonstration"
        title="Démo vidéo"
        intro="Dans cette vidéo, nous montrons le bac et l'application en fonctionnement. Nous remplissons le bac et suivons son état en direct dans le tableau de bord."
      />
      <div className="mx-auto max-w-4xl">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border-2 shadow-xl bg-black" style={{ borderColor: 'rgba(76,187,108,0.3)' }}>
          <video src={demoVideo} className="h-full w-full" controls playsInline preload="metadata" aria-label="Démonstration de BacConnect">
            Votre navigateur ne peut pas lire cette vidéo.{' '}
            <a href={demoVideo} download>Télécharger la vidéo de démonstration</a>.
          </video>
        </div>
      </div>
    </Section>
  )
}
