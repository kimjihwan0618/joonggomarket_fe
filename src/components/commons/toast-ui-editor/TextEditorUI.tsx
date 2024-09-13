import dynamic from 'next/dynamic'
import '@toast-ui/editor/toastui-editor.css'

interface Props {
  content?: string
}

const toolbar = [['heading', 'bold', 'italic', 'strike'], ['hr', 'quote', 'ul', 'ol'], ['image']]

const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), {
  ssr: false,
})

export default function TextEditorUI(props: Props) {
  return (
    <Editor
      initialValue={props.content ?? ' '}
      initialEditType="wysiwyg"
      autofocus={false}
      toolbarItems={toolbar}
      hideModeSwitch
      height="100%"
    />
  )
}
