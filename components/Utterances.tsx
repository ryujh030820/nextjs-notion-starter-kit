import { useEffect, useRef } from 'react'
import { useDarkMode } from '@/lib/use-dark-mode'
import styles from './styles.module.css'

export function Utterances() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isDarkMode } = useDarkMode()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'ryujh030820/nextjs-notion-starter-kit')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', isDarkMode ? 'github-dark' : 'github-light')
    script.crossOrigin = 'anonymous'
    script.async = true

    const utterancesContainer = containerRef.current
    if (utterancesContainer) {
      utterancesContainer.innerHTML = ''
      utterancesContainer.append(script)
    }

    return () => {
      if (utterancesContainer) {
        utterancesContainer.innerHTML = ''
      }
    }
  }, [isDarkMode])

  return <div ref={containerRef} className={styles.utterancesContainer} />
}
