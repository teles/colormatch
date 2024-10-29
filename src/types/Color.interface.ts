type Intensity = number | `A${number}`

// Define o tipo Color como uma união de tipos para cada formato específico
type Color =
  | { format: 'hex'; name: string; hex: string; intensity?: Intensity }
  | { format: 'rgb'; name: string; rgb: string; intensity?: Intensity }
  | { format: 'rgba'; name: string; rgba: string; intensity?: Intensity }
  | { format: 'hsl'; name: string; hsl: string; intensity?: Intensity }
  | { format: 'hsla'; name: string; hsla: string; intensity?: Intensity }
  | { format: 'cssName'; name: string; cssName: string; intensity?: Intensity }
  | { format: 'lab'; name: string; lab: { l: number; a: number; b: number }; intensity?: Intensity }
  | {
      format: 'cmyk'
      name: string
      cmyk: { c: number; m: number; y: number; k: number }
      intensity?: Intensity
    }

export interface Palette {
  name: string
  colors: Color[]
}
