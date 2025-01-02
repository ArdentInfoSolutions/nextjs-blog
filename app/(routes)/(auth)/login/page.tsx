import AuthButton from '@/app/components/auth/auth-button'
import React from 'react'

export default function Login() {
  return (
    <div>
      <h1>You must login first</h1>
      <br/>
      <AuthButton type='google' />
      
    </div>
  )
}
