# React Global Event Handler

> A custom react hook to add event listeners to document and window object of DOM

## Install

#### yarn

```
yarn add react-global-event-handler
```

#### npm

```
npm install react-global-event-handler
```


## Description

You can attach event listeners to global objects like window or document using this custom hook useEventListener without using vanilla JS to achieve the same in react.

## Example

```js
import React, {useState} from 'react'

import useEventListener from 'react-event-handler-global'

const App = () => {

  const [num,setNum] = useState(1)

  useEventListener('click', ()=>{
    console.log("clicked",num)
  },{
    target: document
  })

  useEventListener('scroll', ()=>{
    console.log("scroll event")
  },{
    target: window
  })

  return (
    <div className="App">
      <button type="button" onClick={()=>setNum(num+1)}> Click {num} </button>
    </div>
  );
}

export default App;
```

#### Arguments

`eventType` - `string` - The [event](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for

`handler` - `function` - The listener or handler function to be executed when the described event gets fired


#### Options

`enabled` - `boolean` - To conditionally enable or disable the hook. Default value: true

`target` - `DOM object` - The global DOM object to which the event listener will be added on. Default value: document


