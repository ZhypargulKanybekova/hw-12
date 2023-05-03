import React from 'react'
import { ReactComponent as PlusIcon } from '../icons/System icons.svg'

export const Icons = ({...props}) => {
  return (
    <div>
        <PlusIcon{...props} />
    </div>
  )
}
