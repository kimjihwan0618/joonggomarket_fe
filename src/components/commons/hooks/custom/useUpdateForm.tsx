const ACTIVE_OPTION = {
  shouldDirty: true,
  shouldValidate: true,
}

interface IUseUpdateFormProps {
  updateKeys: string[]
  fetchData: {}
  setValue: (key: string, value: any, options: object) => void
}

export const useUpdateForm = (props: IUseUpdateFormProps) => {
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
