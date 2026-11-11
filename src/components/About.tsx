import { Section, SectionHeading } from './Section'

export function About() {
  return (
    <Section id="a-propos" tone="dark">
      <SectionHeading tone="dark" eyebrow="À propos" title="L'histoire du projet" />
      <div className="max-w-3xl mx-auto flex flex-col gap-6 text-base leading-relaxed text-white/70">
        <p>
          BacConnect est notre projet intégrateur du cours 420-724-AH, dans l'
          <strong className="text-white">AEC Développement d'applications mobiles</strong> du Collège Ahuntsic.
          Nous l'avons réalisé sous la supervision de Louis-Édouard Lafontant.
        </p>
        <p>
          Au départ, chacun de nous a proposé une idée. La première était une application pour revendre à petit prix
          les repas invendus des restaurants en fin de soirée. La deuxième informait les conducteurs des travaux en ville
          pour rediriger la circulation. La troisième était BacConnect, que nous avons choisie par vote.
          Notre première version était très ambitieuse : un volet citoyen, un volet chauffeur, des itinéraires de collecte,
          des horaires de passage, le signalement de bacs endommagés et la localisation du bac le plus proche.
        </p>
        <p>
          Après plusieurs analyses, nous avons recentré le projet sur son cœur technique.
          Nous voulions prouver qu'un bac peut mesurer son propre remplissage de façon fiable, et rendre cette information
          utile à un gestionnaire. Le reste est devenu la suite du projet, présentée dans les{' '}
          <a href="#ameliorations" className="underline text-vivid hover:text-green-300">améliorations futures</a>.
        </p>
      </div>
      <div className="mt-10 max-w-3xl mx-auto p-6 rounded-2xl border-l-4 border-vivid" style={{ backgroundColor: 'rgba(76,187,108,0.1)' }}>
        <h3 className="font-bold text-white mb-2">Notre objectif</h3>
        <p className="text-sm leading-relaxed text-white/70">
          Remplacer une collecte à horaire fixe par une collecte guidée par l'état réel des bacs.
          BacConnect est un outil d'aide à la décision : il complète la planification existante, il ne la remplace pas.
        </p>
      </div>
    </Section>
  )
}
