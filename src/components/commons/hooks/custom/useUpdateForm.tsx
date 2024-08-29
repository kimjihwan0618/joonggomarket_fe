import { useEffect } from 'react'

// setValue, updateKeys: string[], fetchData: object
export const useUpdateForm = (props) => {
  const handleFormUpdate = () => {
    props.updateKeys.forEach((key) => {
      if (key.includes('.')) {
        props.setValue(key, props.fetchData?.[key.split('.')[0]]?.[key.split('.')[1]])
      } else {
        props.setValue(key, props.fetchData?.[key])
      }
    })
  }
  return { handleFormUpdate }
}
