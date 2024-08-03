import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  transition: 'all .1s linear',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$sapuris500',

        '&:not(:disabled):hover': {
          background: '$sapuris600',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$sapuris800',
        border: '2px solid $sapuris800',

        '&:not(:disabled):hover': {
          background: '$sapuris800',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        background: '$gray200',
        color: '$gray400',

        '&:not(:disabled):hover': {
          background: '$gray300',
          color: '$gray500',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
