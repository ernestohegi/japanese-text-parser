// Interactive animations for the Japanese styling
document.addEventListener('DOMContentLoaded', function () {
  // Add fade-in class to elements as they enter viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
        observer.unobserve(entry.target)
      }
    })
  })

  // Observe all article elements and headings
  document
    .querySelectorAll('article, h1, h2, h3, .parsed-result')
    .forEach((el) => {
      observer.observe(el)
    })

  // Subtle hover effects for kanji decoration characters
  const kanjiElements = document.querySelectorAll('.kanji-decoration')
  kanjiElements.forEach((kanji) => {
    // Mouse events
    kanji.addEventListener('mouseover', function () {
      rotateKanji(this)
    })

    kanji.addEventListener('mouseout', function () {
      this.style.transform = 'rotate(0deg)'
    })

    // Touch events for mobile
    kanji.addEventListener('touchstart', function (e) {
      e.preventDefault()
      rotateKanji(this)
      setTimeout(() => {
        this.style.transform = 'rotate(0deg)'
      }, 1000)
    })
  })

  function rotateKanji(element) {
    element.style.transform = 'rotate(' + (Math.random() * 10 - 5) + 'deg)'
  }

  // Active link highlighting
  const currentPath = window.location.pathname
  document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute('href')
    if (
      href === currentPath ||
      (currentPath === '/' && href === '/') ||
      (currentPath.startsWith(href) && href !== '/')
    ) {
      link.classList.add('active')
    }
  })

  // Fix for mobile overflow
  function resizeHandler() {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    )
  }

  window.addEventListener('resize', resizeHandler)
  resizeHandler()
})
