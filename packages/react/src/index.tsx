import { styled } from './styles'
import { VariantProps } from '@stitches/react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$sapuris400',
  borderRadius: '$sm',
  border: 0,
  cursor: 'pointer',
  color: '$white',
  fontWeight: '$bold',

  variants: {
    size: {
      smail: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$lg',
        padding: '$3 $6',
      },
    },
  },
  defaultVariants: {
    size: 'smail',
  },
})

export type ButtonProps = VariantProps<typeof Button>
