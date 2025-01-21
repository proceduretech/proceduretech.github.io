'use client'

import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import InputField from './InputField'

const cardStyles = {
  colored: {
    container: 'text-white',
    input: 'border-[#dee2e6]',
    button: 'bg-white primary-button--blue',
  },
  transparent: {
    container: '-mb-5 text-[#212529] pt-[7vw] pb-0',
    input: 'border-[#249F6B]',
    button: 'bg-green-600/50',
  },
}

type ConsultationType = {
  backgroundColor?: string
  type?: keyof typeof cardStyles
}

const Consultation = ({
  backgroundColor,
  type = 'colored',
}: ConsultationType) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    companyName: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="mb-28 pr-[7vw] lg:pr-[calc(7vw*_3)]">
      <div
        className={twMerge(
          'rounded-r-full py-[7vw] text-white',
          cardStyles[type].container
        )}
        style={{ backgroundColor }}
      >
        <div className="container-padding">
          <h3 className="mt-5">Get a Free Consultation</h3>
          <form
            className="max-w-xl pt-7 lg:pt-12 flex flex-wrap pr-12"
            onSubmit={handleSubmit}
          >
            {[
              { name: 'email', type: 'email', placeholder: 'Email' },
              { name: 'phone', type: 'tel', placeholder: 'Phone' },
              { name: 'name', type: 'text', placeholder: 'Name' },
              {
                name: 'companyName',
                type: 'text',
                placeholder: 'Company Name',
              },
            ].map(field => (
              <InputField
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                inputClassName={cardStyles[type].input}
              />
            ))}
            <br />
            <div className="w-6/12 mb-5 pr-5">
              <button
                type="submit"
                className={twMerge(
                  'primary-button mt-5',
                  cardStyles[type].button
                )}
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Consultation
