import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

// 플러그인 등록
// 스크롤이 지정된 요소에 도달했을 때 애니메이션을 실행하도록 하는 플러그인
gsap.registerPlugin(ScrollTrigger)

const AnimatedTextLines = ({text, className}) => {
  // 1. 텍스트를 줄바꿈("\n") 기준으로 분리
  // 2. 공백만 있는 줄은 제거
  const lines = text.split("\n").filter((line) => line.trim() !== "")
  const containerRef = useRef(null)
  const linesRefs = useRef([])

  useGSAP(() => {
    if(linesRefs.current.length > 0) {
      gsap.from(linesRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out',
        scrollTrigger: {
          trigger: containerRef.current,
        },
      })
    }
  })
  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => (
        <span className="block leading-relaxed tracking-wide text-pretty"
        key={index}
        ref={(el) => (linesRefs.current[index] = el)}>
          {line}
        </span>
      ))}
    </div>
  )
}

export default AnimatedTextLines