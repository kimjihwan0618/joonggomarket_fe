const ACTIVE_OPTION = {
  shouldDirty: true,
  shouldValidate: true,
}

// setValue, updateKeys: string[], fetchData: object
export const useUpdateForm = (props) => {
  const handleFormUpdate = () => {
    props.updateKeys.forEach((key: string) => {
      if (key.includes('.')) {
        props.setValue(
          key,
          props.fetchData?.[key.split('.')[0]]?.[key.split('.')[1]],
          ACTIVE_OPTION
        )
      } else {
        props.setValue(key, props.fetchData?.[key], ACTIVE_OPTION)
      }
    })
  }
  return { handleFormUpdate }
}
