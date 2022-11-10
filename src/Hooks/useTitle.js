import { useEffect } from 'react'

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Digital Cobbler`
  }, [title])
}

export default useTitle
