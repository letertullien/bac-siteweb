import { useEffect, useRef, useState } from 'react'

type BinGaugeProps = {
  pct: number
  color: string
  label: string
}

export function BinGauge({ pct, color, label }: BinGaugeProps) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = () => {
          start += 2
          if (start <= pct) { setDisplayed(start); requestAnimationFrame(step) }
          else setDisplayed(pct)
        }
        requestAnimationFrame(step)
        obs.disconnect()
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-20 rounded-b-xl overflow-hidden border-2" style={{ borderColor: color, backgroundColor: '#E7F3EA' }}>
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-300"
          style={{ height: `${Math.min(displayed, 100)}%`, backgroundColor: color, opacity: 0.85 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="rounded-md px-1.5 py-0.5 text-xs font-bold tabular-nums shadow-sm"
            style={{ color, backgroundColor: 'rgba(255,255,255,0.9)' }}
          >
            {displayed}&nbsp;%
          </span>
        </div>
      </div>
      <div className="w-18 h-2 rounded-full" style={{ backgroundColor: color, width: '4.5rem' }} />
      <span className="text-xs font-medium text-text/60">{label}</span>
    </div>
  )
}
