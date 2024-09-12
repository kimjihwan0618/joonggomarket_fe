import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/toastui-editor.css'

interface Props {
  // editorRef: React.RefObject<Editor> | null
  // imageHandler: (blob: File, callback: typeof Function) => void
  content?: string
}

const toolbar = [['heading', 'bold', 'italic', 'strike'], ['hr', 'quote', 'ul', 'ol'], ['image']]

export default function TextEditorUI(props: Props) {
  return (
    <Editor
      initialValue={props.content ?? ' '}
      initialEditType="wysiwyg"
      autofocus={false}
      // ref={props.editorRef}
      toolbarItems={toolbar}
      hideModeSwitch
      height="100%"
      // hooks={{ addImageBlobHook: props.imageHandler }}
    />
  )
}
