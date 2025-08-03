import React, { useEffect, useState } from "react"

const CarAnimation = () => {
  // Explicitly specify the type of visibleWords as string[]
  const [visibleWords, setVisibleWords] = useState<string[]>([])
  const [currentSet, setCurrentSet] = useState(0)

  const wordSets = [
    ["Driving ", "Aid ", "with ", "Innovation ", "and ", "Transparency "],
    ["Connecting ", "Donors, ", "NGOs, ", "and ", "Beneficiaries ", "Seamlessly "],
    ["Delivering ", "Aid ", "Efficiently, ", "Anywhere ", "in ", "the ", "World"],
  ]

  useEffect(() => {
    let delay = 0
    const timeouts: NodeJS.Timeout[] = []

    // Clear any existing visible words
    setVisibleWords([])

    // Ensure wordSets[currentSet] is defined
    const currentWordSet = wordSets[currentSet]
    if (currentWordSet) {
      // Display the current set of words
      currentWordSet.forEach((word, index) => {
        const timeout = setTimeout(() => {
          setVisibleWords((prev) => [...prev, word])
        }, delay)
        timeouts.push(timeout)
        delay += 500 // Adjust the delay between words (500ms in this case)
      })

      // After displaying all words, wait for a moment, then clear and switch to the next set
      const clearTimeoutId = setTimeout(() => {
        setVisibleWords([])
        setCurrentSet((prevSet) => (prevSet + 1) % wordSets.length)
      }, delay + 1000) // Wait an additional 1 second before clearing and switching

      timeouts.push(clearTimeoutId)
    }

    // Cleanup function to clear timeouts if the component unmounts
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
    }
  }, [currentSet]) // Re-run effect when currentSet changes

  return (
    <section className="primary-100 relative flex h-[117px] items-center justify-center max-sm:h-[91px]">
      <div className="img-element absolute bottom-0 left-10 max-sm:hidden"></div>
      <div className="img-element-two-sm absolute bottom-0 left-0 md:hidden"></div>
      <div className="img-element-sm absolute bottom-0 right-0 md:hidden"></div>
      <div className="img-element-two absolute bottom-0 right-10 max-sm:hidden"></div>
      <div className="flex items-center xl:pl-32">
        <h2 className="animate-text text-sm font-medium xl:text-3xl">
          {visibleWords.map((word, index) => (
            <span key={index} className="word">
              {word}{" "}
            </span>
          ))}
        </h2>
        <div className="car-img"></div>
      </div>
    </section>
  )
}

export default CarAnimation
