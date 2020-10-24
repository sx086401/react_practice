import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useEffect, useRef } from 'react'
import { apiResponse } from '../../../epics/utils'
import { Subscription } from 'rxjs'
import { SensorRequestBody } from '../../../model/sensor'
import { sensorActionTypes } from '../../../reducer/sensor/sensorActions'

interface Props {
  onSubmit: (formData: SensorRequestBody) => void
}

interface FormErrors {
  display_name: string | null
}

export default function Form(props: Props) {
  const { onSubmit } = props
  const [formData, setFormData] = useState<SensorRequestBody>({
    display_name: '',
    type: 'A',
    extra: '',
  })
  const [errors, setErrors] = useState<FormErrors>(
    { display_name: null }
  )
  const [isLoading, setIsLoading] = useState(false)
  const subscription = useRef<Subscription | null>(null)

  useEffect(() => {
    subscription.current = apiResponse.subscribe(
      { nextActions: [sensorActionTypes.CREATE_SENSOR_SUCCESS]},
      { next: () => (setIsLoading(false) )}
    )
    return () => {
      subscription.current!.unsubscribe()
    }
  }, [])

  const beforeSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (formData.display_name === '') {
      setErrors({ display_name: 'Required' })
    } else if (formData.display_name.length > 6) {
      setErrors({ display_name: 'Exceed maximum length.' })
    }
    setIsLoading(true)
    onSubmit(formData)
  }

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const newDisplayName = e.target.value
    const newErrors: FormErrors = { ...errors, display_name: null }

    if (formData.display_name === '') {
      newErrors.display_name = 'Required'
    } else if (newDisplayName.length > 6) {
      newErrors.display_name = 'Exceed maximum length.'
    }
    setFormData({ ...formData, display_name: e.target.value })
    setErrors(newErrors)
  }

  const onBlurName = () => {
    if (formData.display_name === '') {
      setErrors({
        ...errors,
        display_name: 'Required'
      })
    }
  }

  return <form onSubmit={beforeSubmit}>
    <label>Name: </label>
    <div>
      <input
        disabled={isLoading}
        value={formData.display_name}
        onChange={onChangeName}
        onBlur={onBlurName}
      />
    </div>
    {errors.display_name && <div style={{ color: 'red' }}>{errors.display_name}</div>}
    <br/>
    <div>
      <label>Type: </label>
      <span>A</span>
    </div>
    <br/>
    <div>
      <label>Extra: </label>
      <input
        disabled={isLoading}
        value={formData.extra}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, extra: e.target.value})}
      />
    </div>
    <button type="submit">submit</button>
  </form>
}
