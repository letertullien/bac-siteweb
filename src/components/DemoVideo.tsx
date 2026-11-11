import { Placeholder } from './Placeholder'
import { Section, SectionHeading } from './Section'

const VIDEO_URL: string = ''

const isYouTube = (url: string) => /youtube\.com|youtu\.be|youtube-nocookie\.com/.test(url)

function Player({ url }: { url: string }) {
  if (isYouTube(url)) {
    return (
      <iframe
        src={url}
        title="Démonstration de BacConnect"
        className="h-full w-full"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
      />
    )
  }
  return <video src={url} className="h-full w-full bg-black" controls preload="metadata" playsInline />
}

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
        {VIDEO_URL ? (
          <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-xl">
            <Player url={VIDEO_URL} />
          </div>
        ) : (
          <Placeholder label="vidéo de démonstration au format 16:9 (le bac et l'application en fonctionnement)" className="aspect-video w-full rounded-2xl" />
        )}
      </div>
    </Section>
  )
}
