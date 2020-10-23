export interface Sensor {
  id: number
  display_name: string
  type: 'A' | 'B' | 'C'
  extra?: string
}
