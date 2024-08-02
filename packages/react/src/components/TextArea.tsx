import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray200',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray800',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  '&:focus': {
    outline: 0,
    borderColor: '$sapuris500',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
