import React, { ChangeEvent, FormEvent, useState } from 'react'
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

  const beforeSubmit = (e: FormEvent) => {
    console.log(e)
    onSubmit(formData)
  }

  return <form onSubmit={beforeSubmit}>
    <label>Name</label>
    <div>
      <input
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
        value={formData.extra}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, extra: e.target.value})}
      />
    </div>
    <button type="submit">submit</button>
  </form>
}
