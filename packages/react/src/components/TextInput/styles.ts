import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray200',
  transition: 'all .1s ease',
  display: 'flex',
  alignItems: 'center',
  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },
  '&:has(input:focus)': { borderColor: '$sapuris500' },
  '&:has(input:disabled)': { opacity: 0.5, cursor: 'not-allowed' },
  defaultVariants: {
    size: 'md',
  },
})
export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})
export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray900',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  '&:focus': { outline: 0 },
  '&:disabled': { cursor: 'not-allowed' },
  '&::placeholder': { color: '$gray400' },
})
