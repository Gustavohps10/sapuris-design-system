import { colors } from '@sapuris-ui/tokens'
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$sapuris400',
})

export function App() {
  return <button style={{ backgroundColor: colors.sapuris500 }}></button>
}
