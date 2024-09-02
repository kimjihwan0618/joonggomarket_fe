import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      main: string
      gray01: string
      gray02: string
      gray03: string
      gray04: string
      gray05: string
      gray06: string
      gray07: string
    }
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // 모든 data-* 속성 정의
    [key: `data-${string}`]: any
  }
}
