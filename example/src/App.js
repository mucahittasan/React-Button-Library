import React from 'react'

import { ExampleComponent, Button } from 'stealui'
import 'stealui/dist/index.css'

const App = () => {
  return(
    <>
      <Button type='primary'>Primary</Button>
      <Button type=''>Default</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='text'>Text</Button>
      <Button type='link'>Link</Button>
    </>
  ) 
}

export default App;
