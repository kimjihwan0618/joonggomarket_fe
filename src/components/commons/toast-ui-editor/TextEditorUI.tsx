import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

interface Props {
  onChange: (value: string) => void
  value: string
}
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ['small', 'medium', 'large', 'huge'] }], // 폰트 사이즈 옵션 추가
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean'], // 포맷 초기화 버튼
  ],
}

const ReactQuill = dynamic(async () => await import('react-quill'), { ssr: false })

export default function TextEditorUI(props: Props) {
  return (
    <ReactQuill
      modules={modules}
      value={props.value}
      onChange={props.onChange}
      style={{ height: '270px' }}
    />
  )
}
