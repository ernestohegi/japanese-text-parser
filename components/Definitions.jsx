import React from 'react'
import Definition from './Definition'

const styles = {
  sectionContainer: {
    marginBottom: '1.5rem',
  },
  sectionHeading: {
    fontFamily: "'Zen Maru Gothic', sans-serif",
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBottom: '0.75rem',
    color: '#333333',
    borderBottom: '2px solid #4d7298',
    display: 'inline-block',
    paddingBottom: '0.25rem',
  },
  serviceLink: {
    color: '#4d7298',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
}

const Definitions = ({ definitions, translationId, handleClick }) => (
  <section style={styles.sectionContainer}>
    <h3 style={styles.sectionHeading}>
      <a
        href="https://www.jisho.org"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.serviceLink}
      >
        Jisho
      </a>
    </h3>
    {definitions?.map((definition) => (
      <React.Fragment key={definition}>
        <Definition
          definition={definition}
          onClick={() => handleClick(definition, translationId)}
        />
      </React.Fragment>
    ))}
  </section>
)

export default Definitions
