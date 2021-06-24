// import original module declaration
import "styled-components"

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    body: string
    text: string
    textHeader: string
    background: string

    colors: {
      red: string
      green: string
      blue: string
      yellow: string
    }
  }
}
