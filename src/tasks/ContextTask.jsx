import React from 'react'
import ContextConsumer from './ContextConsumer'

export const TestContext = React.createContext({ value: '', setValue: () => { } })

const ContextTask = () => {

  const context = React.useContext(TestContext)
  const [value, setValue] = React.useState('')

  return (

    <div className="">
      <TestContext.Provider value={{ value, setValue }}>

        <h1>ContextTask</h1>
        <label>Set context value</label>
        <input type="text" onInput={(e) => setValue(e.target.value)} />
        <ContextConsumer />

      </TestContext.Provider>

    </div>
  )
}

export default ContextTask