import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function SisteNyttSlider() {
  const cards = [
    {
      title: "First News Item",
      paragraph: "This is the first news story with some interesting content.",
      date: "2024-03-20",
      image: "https://picsum.photos/800/600?random=1"
    },
    {
      title: "Second News Item",
      paragraph: "Another fascinating story with compelling details.",
      date: "2024-03-19",
      image: "https://picsum.photos/800/600?random=2"
    },
    {
      title: "Third News Item",
      paragraph: "The third news story with engaging information.",
      date: "2024-03-18",
      image: "https://picsum.photos/800/600?random=3"
    },
    {
      title: "Fourth News Item",
      paragraph: "Yet another interesting news piece.",
      date: "2024-03-17",
      image: "https://picsum.photos/800/600?random=4"
    },
    {
      title: "Fifth News Item",
      paragraph: "The fifth news story with engaging information.",
      date: "2024-03-16",
      image: "https://picsum.photos/800/600?random=5"
    },
    {
      title: "Sixth News Item",
      paragraph: "Yet another interesting news piece.",
      date: "2024-03-15",
      image: "https://picsum.photos/800/600?random=6"
    },
    {
      title: "Seventh News Item",
      paragraph: "The seventh news story with engaging information.",
      date: "2024-03-14",
      image: "https://picsum.photos/800/600?random=7"
    },
    {
      title: "Eighth News Item",
      paragraph: "Yet another interesting news piece.",
      date: "2024-03-13",
      image: "https://picsum.photos/800/600?random=8"
    },
    {
      title: "Ninth News Item",
      paragraph: "The final news story with engaging information.",
      date: "2024-03-12",
      image: "https://picsum.photos/800/600?random=9"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const checkScreenSize = () => {
      setCardsPerView(window.innerWidth < 640 ? 1 : 3)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const nextSlide = () => {
    const nextIndex = currentIndex === cards.length - cardsPerView ? 0 : currentIndex + 1
    animateSlide(nextIndex)
    setCurrentIndex(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? cards.length - cardsPerView : currentIndex - 1
    animateSlide(prevIndex)
    setCurrentIndex(prevIndex)
  }

  const animateSlide = (newIndex: number) => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: `${-newIndex * (100 / cards.length)}%`,
        duration: 0.5,
        ease: "power2.out"
      })
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-5 sm:p-0">
        <h1 className="container text-5xl text-[--text] font-bold mb-4">SISTE NYTT</h1>
        <div className="container relative overflow-hidden bg-indigo-400 rounded-3xl p-8">
          <div className="flex items-stretch justify-between gap-4">

            <div className="w-full overflow-hidden rounded-xl">
              <button
                onClick={prevSlide}
                className="absolute left-5 top-[50%] translate-y-[-50%] z-10 w-full sm:w-12 h-12 flex items-center justify-center bg-indigo-300 text-white hover:opacity-75 rounded-lg"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div
                ref={sliderRef}
                className="flex"
                style={{
                  width: `${100 * (cards.length / cardsPerView)}%`,
                }}
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="relative px-2"
                    style={{ width: `${100 / cards.length}%` }}
                  >
                    <div className="h-full overflow-hidden rounded-lg bg-white relative inset-0">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full object-cover aspect-square"
                      />
                      <div className="absolute bg-[#00000063] p-4 backdrop-blur-xl rounded-3xl left-5 bottom-5 right-5 text-indigo-50">
                        <h3 className="text-xl font-bold">{card.title}</h3>
                        <p className="mt-2">{card.paragraph}</p>
                        <p className="mt-2 text-indigo-300">{card.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="absolute right-5 top-[50%] translate-y-[-50%] w-full sm:w-12 h-12 flex items-center justify-center bg-indigo-300 text-white hover:opacity-75 rounded-lg"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
