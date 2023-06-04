import React from 'react'

interface IContent{
  children: React.ReactElement
}

const Content = ({children}: IContent) => {
  return (
    <section>
      {children}
    </section>
  )
}

export default Content