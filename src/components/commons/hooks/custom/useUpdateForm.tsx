import { useEffect } from 'react'

// setValue, updateKeys: string[], fetchData: object
export const useUpdateForm = (props) => {
  const handleFormUpdate = () => {
    props.updateKeys.forEach((key) => {
      if (key.includes('.')) {
        console.log(props.fetchData?.[key.split('.')[0]]?.[key.split('.')[1]])
        props.setValue(key, props.fetchData?.[key.split('.')[0]]?.[key.split('.')[1]])
      } else {
        console.log(props.fetchData?.[key])
        props.setValue(key, props.fetchData?.[key])
      }
    })
  }
  return { handleFormUpdate }
}
