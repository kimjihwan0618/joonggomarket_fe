import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

interface Props {
  content?: string
  onChange: (value: string) => void
  value: string
}

const ReactQuill = dynamic(async () => await import('react-quill'), { ssr: false })

export default function TextEditorUI(props: Props) {
  return <ReactQuill value={props.value} onChange={props.onChange} style={{ height: '270px' }} />
}
