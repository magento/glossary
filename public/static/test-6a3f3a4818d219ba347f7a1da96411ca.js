import React from 'react'

import { TermsList } from '../components/GlossaryTerms'

class App extends React.Component {
  render() {
    let { site, allFile } = this.props.pageContext.result.data
    let { edges: files } = allFile

    return (
      <>
        <TermsList files={files} />
      </>
    )
  }
}

export default App
