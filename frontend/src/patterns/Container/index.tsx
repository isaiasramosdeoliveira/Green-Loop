import React from 'react'

interface IMain{
    children: React.ReactElement
}

const Container = ({children}: IMain) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default Container