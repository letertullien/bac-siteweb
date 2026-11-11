# Contenus provisoires à remplacer

Tous les emplacements provisoires du site affichent un cadre gris en pointillés commençant par « À REMPLACER : ». Ils utilisent le composant `src/components/Placeholder.tsx`. Ils disparaissent automatiquement dès que le contenu est renseigné à l'endroit indiqué ci-dessous.

Où placer les fichiers :
- **Images** : dans `src/assets/`, puis importées en haut du composant (`import photo from '../assets/nom.webp'`).
- **Vidéos** : dans `public/videos/`, référencées par leur chemin (`'/videos/nom.mp4'`).

| # | Section | Fichier | Ce qu'il faut fournir | Format conseillé | Où le renseigner |
|---|---|---|---|---|---|
| 1 | Le prototype | `src/components/Prototype.tsx` | Photo du montage réel du prototype dans son boîtier | JPG ou WebP, paysage 4:3, environ 1600 × 1200 px, moins de 400 Ko | Constante `PROTOTYPE_PHOTO` |
| 2 | L'application | `src/components/AppShowcase.tsx` | Capture ou courte vidéo : tableau de bord | Image PNG ou WebP en portrait 9:16 (environ 860 × 1840 px), ou vidéo MP4 (H.264) sans son de 15 s maximum, moins de 3 Mo | `media` de l'élément « Tableau de bord » dans `FEATURES` : `{ kind: 'image', src: … }` ou `{ kind: 'video', src: '/videos/…' }` |
| 3 | L'application | `src/components/AppShowcase.tsx` | Capture ou courte vidéo : liste des bacs | Idem n° 2 | `media` de « Liste des bacs » |
| 4 | L'application | `src/components/AppShowcase.tsx` | Capture ou courte vidéo : assistant de calibrage | Idem n° 2 | `media` de « Assistant de calibrage » |
| 5 | L'application | `src/components/AppShowcase.tsx` | Capture ou courte vidéo : gestion des zones | Idem n° 2 | `media` de « Gestion des zones » |
| 6 | Démo vidéo | `src/components/DemoVideo.tsx` | Vidéo de démonstration : le bac et l'application en fonctionnement | 16:9, 1080p, 1 à 3 minutes. Soit une URL YouTube intégrée (`https://www.youtube.com/embed/IDENTIFIANT`), soit un fichier MP4 (H.264) dans `public/videos/` | Constante `VIDEO_URL` |
| 7 | Équipe | `src/components/Team.tsx` | Photo de Tertullien KOUMETIO TANE | JPG ou WebP carré, 600 × 600 px, moins de 200 Ko | `photo` de Tertullien dans `MEMBERS` |
| 8 | Équipe | `src/components/Team.tsx` | Photo d'Elda WAMBA | Idem n° 7 | `photo` d'Elda |
| 9 | Équipe | `src/components/Team.tsx` | Photo de Hadjer AIT HADI | Idem n° 7 | `photo` de Hadjer |
| 10 | Équipe | `src/components/Team.tsx` | Présentation personnelle de Tertullien KOUMETIO TANE | Texte de 3 ou 4 phrases, au « je », sans tiret cadratin | `bio` de Tertullien |
| 11 | Équipe | `src/components/Team.tsx` | Présentation personnelle d'Elda WAMBA | Idem n° 10 | `bio` d'Elda |
| 12 | Équipe | `src/components/Team.tsx` | Présentation personnelle de Hadjer AIT HADI | Idem n° 10 | `bio` de Hadjer |

## À revoir (facultatif)

- **L'application** (`src/components/AppShowcase.tsx`) : les deux captures actuelles (`src/assets/img7.png` et `img8.png`) montrent le bac prototype vide, à 0 % et 0,0 kg. Des captures avec un bac en partie rempli seraient plus parlantes. Format conseillé : PNG ou WebP en portrait, moins de 400 Ko.
- **Partage sur les réseaux** (`.figma/make/site.json`) : l'image de partage (`openGraph.image`) est pour l'instant l'icône de l'application. Une image dédiée de 1200 × 630 px serait mieux adaptée.
