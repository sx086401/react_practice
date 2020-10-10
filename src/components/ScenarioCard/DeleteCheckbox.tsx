import React from 'react'
import { styled } from '@material-ui/core'

const Checkbox = styled('div')({
  background: '#CCCCCC',
  position: 'absolute',
  top: 4,
  right: 4,
  width: 44,
  height: 44,
  '&.active': {
    background: 'red',
  },
})

interface Props {
  onSelect: () => void
  isChecked: boolean
}

export default function DeleteCheckbox(props: Props) {
  const { isChecked, onSelect } = props
  return (
    <Checkbox className={isChecked ? 'active' : ''} onClick={onSelect}>
      V
    </Checkbox>
  )
}
