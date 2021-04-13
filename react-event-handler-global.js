import { useRef, useEffect } from 'react';

const useEventListener = (eventType, handler, { enabled = true, target = document } = {}) =>{
  const handlerRef = useRef(handler)

  useEffect(()=>{
    handlerRef.current = handler
  })

  useEffect(()=>{

    if(!enabled){
      return
    }

    const internalHandler = (e) =>{
      return handlerRef.current(e)
    }

    target.addEventListener(eventType, internalHandler)

    return () => target.removeEventListener(eventType, internalHandler)
    // eslint-disable-next-line
  },[eventType, enabled, target])

}

export default useEventListener 