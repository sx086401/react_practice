import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useEffect, useRef } from 'react'
import { apiResponse } from '../../../epics/utils'
import { Subscription } from 'rxjs'
import { SensorRequestBody } from '../../../model/sensor'

interface Props {
  onSubmit: (formData: SensorRequestBody) => void
}

export default function Form(props: Props) {
  const { onSubmit } = props
  const [formData, setFormData] = useState<SensorRequestBody>({
    display_name: '',
    type: 'A',
    extra: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const subscription = useRef<Subscription | null>(null)

  useEffect(() => {
    subscription.current = apiResponse.subscribe({
      next: () => (setIsLoading(false))
    })
    return () => {
      subscription.current!.unsubscribe()
    }
  }, [])

  const beforeSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    onSubmit(formData)
  }

  return <form onSubmit={beforeSubmit}>
    <label>Name</label>
    <div>
      <input
        disabled={isLoading}
        value={formData.display_name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, display_name: e.target.value})}
      />
    </div>
    <div>
      <label>Type</label>
      <span>A</span>
    </div>
    <div>
      <label>Extra</label>
      <input
        disabled={isLoading}
        value={formData.extra}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, extra: e.target.value})}
      />
    </div>
    <button type="submit">submit</button>
  </form>
}
