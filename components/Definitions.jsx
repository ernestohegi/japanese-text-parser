import React from 'react'
import Definition from './Definition'

const Definitions = ({ definitions, translationId, handleClick }) => (
  <section>
    <h3>
      <a href="https://www.jisho.org" target="_blank">
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
