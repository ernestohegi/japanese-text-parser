document.addEventListener('DOMContentLoaded', function () {
  // Helper function to handle mobile device detection
  function isMobileDevice() {
    return (
      window.innerWidth <= 768 ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    )
  }

  // Add touch-specific handlers for floating buttons on mobile
  function setupFloatingButtons() {
    const floatingButtons = document.querySelectorAll('.floating-button')

    if (isMobileDevice()) {
      floatingButtons.forEach((button) => {
        // Add active state for feedback on touch
        button.addEventListener('touchstart', function () {
          this.classList.add('touch-active')

          // Create ripple effect
          const ripple = document.createElement('span')
          ripple.classList.add('touch-ripple')
          ripple.style.width = ripple.style.height =
            Math.max(button.offsetWidth, button.offsetHeight) + 'px'

          // Position the ripple at the touch point
          const rect = button.getBoundingClientRect()
          ripple.style.left = '50%'
          ripple.style.top = '50%'
          ripple.style.transform = 'translate(-50%, -50%) scale(0)'

          // Add to DOM
          button.appendChild(ripple)

          // Animate
          setTimeout(() => {
            ripple.style.transform = 'translate(-50%, -50%) scale(3)'
            ripple.style.opacity = '0'

            // Clean up after animation
            setTimeout(() => {
              ripple.remove()
            }, 600)
          }, 10)
        })

        // Show tooltip briefly on tap
        button.addEventListener('touchstart', function () {
          const tooltip = this.querySelector('.floating-button-label')

          if (tooltip) {
            tooltip.style.opacity = '1'
            tooltip.style.transform = 'translateX(0)'

            // Hide tooltip after delay
            setTimeout(() => {
              tooltip.style.opacity = '0'
              tooltip.style.transform = 'translateX(10px)'
            }, 1500)
          }
        })

        // Remove active state
        button.addEventListener('touchend', function () {
          this.classList.remove('touch-active')
        })
      })
    }
  }

  // Adjust viewport height for mobile browsers
  function setViewportHeight() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  // Set on initial load
  setViewportHeight()

  // Setup floating buttons with a slight delay to ensure DOM is fully loaded
  setTimeout(setupFloatingButtons, 300)

  // Update on resize
  window.addEventListener('resize', function () {
    setViewportHeight()
    setupFloatingButtons()
  })

  // Add CSS for ripple effect if needed
  if (!document.getElementById('touch-ripple-style') && isMobileDevice()) {
    const style = document.createElement('style')
    style.id = 'touch-ripple-style'
    style.textContent = `
      .touch-active {
        transform: scale(0.95) !important;
      }
      .touch-ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        pointer-events: none;
        transition: transform 0.6s, opacity 0.6s;
        opacity: 0.7;
        z-index: 0;
      }
    `
    document.head.appendChild(style)
  }
})
