import React from 'react'
import AuthForm from '@/components/ui/AuthForm'

const SignIn = () => {
   return (
      <div>
         <section className='flex-center size-full max-sm:px-6'>
            <AuthForm type="sign-in" />
         </section>
      </div>
   )
}

export default SignIn
