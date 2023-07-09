import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const paragraphStyles = {
  marginBottom: 48,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Hi, this is Sinem. 👩🏼‍💻
      </h1>
      <p style={paragraphStyles}>
       Come back later. 🚧
      </p>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Sinem AI</title>
