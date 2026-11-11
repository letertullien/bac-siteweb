import type { Tone } from './Section'

type PlaceholderProps = {
  label: string
  tone?: Tone
  className?: string
}

export function Placeholder({ label, tone = 'light', className = '' }: PlaceholderProps) {
  const colors =
    tone === 'dark'
      ? 'border-gray-400/50 bg-gray-400/10 text-gray-300'
      : 'border-gray-300 bg-gray-100 text-gray-500'
  return (
    <div className={`flex items-center justify-center rounded-xl border-2 border-dashed p-4 text-center ${colors} ${className}`}>
      <p className="text-xs leading-relaxed">
        <span className="font-bold tracking-wide">À REMPLACER :</span> {label}
      </p>
    </div>
  )
}
