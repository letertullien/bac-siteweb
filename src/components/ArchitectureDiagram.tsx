const COLORS = {
  node: 'rgba(255,255,255,0.06)',
  vivid: '#4CBB6C',
  gold: '#F2C98B',
  white: '#FFFFFF',
  muted: 'rgba(255,255,255,0.65)',
}

const ARIA_LABEL =
  "Schéma de l'architecture. Le bac connecté, avec un ESP8266, un HX711 pour le poids et un HC-SR04 pour la profondeur, envoie ses mesures au backend Node.js / Express par une requête POST en HTTP / JSON. Cette liaison est à sens unique : le bac ne reçoit aucune commande. Le backend calcule les pourcentages et le statut de ramassage, et lit et écrit dans la base MySQL. La liaison entre l'application React Native / Expo et le backend va dans les deux sens. L'application envoie des requêtes GET, POST, PUT et DELETE pour lire l'état chaque seconde, et pour créer, modifier, calibrer et supprimer des bacs et des zones. Le backend lui renvoie l'état des bacs et des zones en JSON, que l'application affiche sans recalculer. Les trois composantes partagent le même réseau WiFi local."

type NodeProps = {
  x: number
  y: number
  w: number
  h: number
  title: string
  tech: string
  lines?: string[]
  accent?: string
}

function Node({ x, y, w, h, title, tech, lines = [], accent = COLORS.vivid }: NodeProps) {
  const cx = x + w / 2
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={16} fill={COLORS.node} stroke={accent} strokeOpacity={0.6} strokeWidth={1.5} />
      <text x={cx} y={y + 32} textAnchor="middle" fill={COLORS.white} fontSize={17} fontWeight={800}>{title}</text>
      <text x={cx} y={y + 54} textAnchor="middle" fill={accent} fontSize={13} fontWeight={600}>{tech}</text>
      {lines.map((line, i) => (
        <text key={line} x={cx} y={y + 84 + i * 19} textAnchor="middle" fill={COLORS.muted} fontSize={12.5}>{line}</text>
      ))}
    </g>
  )
}

type ArrowProps = {
  id: string
  x1: number
  y1: number
  x2: number
  y2: number
  both?: boolean
}

function Arrow({ id, x1, y1, x2, y2, both = false }: ArrowProps) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={COLORS.gold}
      strokeWidth={2}
      markerEnd={`url(#${id}-arrow)`}
      markerStart={both ? `url(#${id}-arrow)` : undefined}
    />
  )
}

function Label({ x, y, text, anchor = 'middle', size = 12.5 }: { x: number; y: number; text: string; anchor?: 'start' | 'middle'; size?: number }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fill={COLORS.gold} fontSize={size} fontWeight={600}>{text}</text>
  )
}

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX={9} refY={5} markerWidth={7} markerHeight={7} orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill={COLORS.gold} />
      </marker>
    </defs>
  )
}

function NetworkFrame({ w, h, lines }: { w: number; h: number; lines: string[] }) {
  return (
    <g>
      <rect x={8} y={8} width={w - 16} height={h - 16} rx={24} fill="none" stroke={COLORS.gold} strokeOpacity={0.55} strokeWidth={1.5} strokeDasharray="6 8" />
      {lines.map((line, i) => (
        <text key={line} x={30} y={38 + i * 18} fill={COLORS.gold} fontSize={i === 0 ? 13 : 12} fontWeight={i === 0 ? 700 : 500}>{line}</text>
      ))}
    </g>
  )
}

function HorizontalDiagram() {
  const id = 'arch-h'
  return (
    <svg viewBox="0 0 960 430" role="img" aria-label={ARIA_LABEL} className="hidden md:block w-full h-auto" style={{ fontFamily: 'inherit' }}>
      <Defs id={id} />
      <NetworkFrame w={960} h={430} lines={["Réseau WiFi local : un seul point d'accès partagé"]} />
      <Node x={24} y={70} w={190} h={150} title="Bac connecté" tech="ESP8266" lines={['HX711 : poids', 'HC-SR04 : profondeur']} />
      <Node x={344} y={70} w={200} h={150} title="Backend" tech="Node.js / Express" lines={['Calcule les pourcentages', 'et le statut de ramassage']} />
      <Node x={744} y={70} w={190} h={150} title="Application" tech="React Native / Expo" lines={["Affiche l'état", 'sans recalculer']} />
      <Node x={374} y={300} w={140} h={80} title="MySQL" tech="Base de données" accent={COLORS.gold} />
      <Arrow id={id} x1={216} y1={145} x2={340} y2={145} />
      <Label x={278} y={130} text="POST des mesures" />
      <Label x={278} y={168} text="HTTP / JSON" />
      <Arrow id={id} x1={742} y1={122} x2={548} y2={122} />
      <Label x={645} y={92} text="Requêtes" />
      <Label x={645} y={110} text="(GET, POST, PUT, DELETE)" />
      <Arrow id={id} x1={548} y1={170} x2={742} y2={170} />
      <Label x={645} y={192} text="État des bacs et des zones" />
      <Label x={645} y={210} text="(JSON), chaque seconde" />
      <Arrow id={id} x1={444} y1={224} x2={444} y2={296} both />
      <Label x={458} y={265} text="SQL" anchor="start" />
    </svg>
  )
}

function VerticalDiagram() {
  const id = 'arch-v'
  return (
    <svg viewBox="0 0 360 730" role="img" aria-label={ARIA_LABEL} className="md:hidden w-full max-w-sm mx-auto h-auto" style={{ fontFamily: 'inherit' }}>
      <Defs id={id} />
      <NetworkFrame w={360} h={730} lines={['Réseau WiFi local', "un seul point d'accès partagé"]} />
      <Node x={30} y={70} w={300} h={130} title="Bac connecté" tech="ESP8266" lines={['HX711 : poids', 'HC-SR04 : profondeur']} />
      <Arrow id={id} x1={180} y1={202} x2={180} y2={286} />
      <Label x={194} y={238} text="POST des mesures" anchor="start" />
      <Label x={194} y={256} text="HTTP / JSON" anchor="start" />
      <Node x={30} y={290} w={200} h={150} title="Backend" tech="Node.js / Express" lines={['Calcule les pourcentages', 'et le statut de ramassage']} />
      <Node x={262} y={325} w={78} h={80} title="MySQL" tech="Données" accent={COLORS.gold} />
      <Arrow id={id} x1={232} y1={372} x2={260} y2={372} both />
      <Label x={246} y={358} text="SQL" size={11} />
      <Arrow id={id} x1={60} y1={556} x2={60} y2={444} />
      <Label x={72} y={480} text="Requêtes" anchor="start" size={11.5} />
      <Label x={72} y={496} text="(GET, POST," anchor="start" size={11.5} />
      <Label x={72} y={512} text="PUT, DELETE)" anchor="start" size={11.5} />
      <Arrow id={id} x1={200} y1={444} x2={200} y2={556} />
      <Label x={212} y={480} text="État des bacs" anchor="start" size={11.5} />
      <Label x={212} y={496} text="et des zones" anchor="start" size={11.5} />
      <Label x={212} y={512} text="(JSON), chaque" anchor="start" size={11.5} />
      <Label x={212} y={528} text="seconde" anchor="start" size={11.5} />
      <Node x={30} y={560} w={300} h={130} title="Application" tech="React Native / Expo" lines={["Affiche l'état", 'sans recalculer']} />
    </svg>
  )
}

export function ArchitectureDiagram() {
  return (
    <div className="rounded-2xl p-2 md:p-4" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
      <HorizontalDiagram />
      <VerticalDiagram />
    </div>
  )
}
