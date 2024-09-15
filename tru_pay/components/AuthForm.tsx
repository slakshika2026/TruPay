"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';




const AuthForm = ({ type }: { type: string }) => {
   const [user, setUser] = useState(null);
   const [isLoading, setIsLoading] = useState(false)

   // 1. Define form.
   const form = useForm<z.infer<typeof authFormSchema>>({
      resolver: zodResolver(authFormSchema),
      defaultValues: {
         email: "",
         password: ""
      },
   })


   function onSubmit(values: z.infer<typeof authFormSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      setIsLoading(true)
      console.log(values)
      setIsLoading(false);
   }

   return (
      <section className='auth-form'>
         <header className='flex flex-col gap-5 md:gap-8'>
            <Image
               src="/icons/truepaylogotrans.png"
               alt="Trupay Logo"
               width={180}
               height={90}



            />
            <div className="flex flex-col gap-1 md:gap-3">
               <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                  {user
                     ? 'Link Account'
                     : type === 'sign-in'
                        ? 'Sign In'
                        : 'Sign Up'
                  }
                  <p className='text-16 font-normal text-gray-600'>
                     {user ? 'Link your account to get started'
                        : 'Please enter you details'}
                  </p>
               </h1>
            </div>
         </header>
         {user ? (
            <div className="flex flex-col gap-4">
               {/* PlaidLink */}
            </div>
         )
            : (
               <>
                  <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8">
                        {type === 'sign-up' && (
                           <>
                              <CustomInput
                                 control={form.control}
                                 name="firstName"
                                 label='First Name'
                                 placeholder='Enter your First name' />

                              <CustomInput
                                 control={form.control}
                                 name="lastName"
                                 label='Last Name'
                                 placeholder='Enter your Last name' />


                              <CustomInput
                                 control={form.control}
                                 name="address"
                                 label='Address'
                                 placeholder='Enter your address' />

                              <CustomInput
                                 control={form.control}
                                 name="state"
                                 label='State'
                                 placeholder='Enter your State' />

                              <CustomInput
                                 control={form.control}
                                 name="postalCode"
                                 label='Postal Code'
                                 placeholder='Enter your postal Code' />

                              <CustomInput
                                 control={form.control}
                                 name="dateOfBirth"
                                 label='Date Of Birth'
                                 placeholder='Enter your Date Of Birth' />

                              <CustomInput
                                 control={form.control}
                                 name="ssn"
                                 label='SSN'
                                 placeholder='Enter your SSN' />

                           </>





                        )}

                        <CustomInput
                           control={form.control}
                           name="email"
                           label='Email'
                           placeholder='Enter your email' />

                        <CustomInput
                           control={form.control}
                           name="password"
                           label='Password'
                           placeholder='Enter your password' />

                        <div className='flex flex-col gap-4'>
                           <Button disabled={isLoading} type="submit" className='form-btn'>
                              {isLoading ? (
                                 <>
                                    <Loader2 size={20}
                                       className='animate-spin' /> &nbsp;
                                    Loading...
                                 </>
                              ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                           </Button>
                        </div>


                     </form>
                  </Form>

                  <footer className='flex justify-center gap-1'>
                     <p className='text-14 font-normal text-gray-600'> {type === 'sign-in'
                        ? "Don't have an accout?"
                        : "Already have an account?"}</p>
                     <Link
                        href={type === 'sign-in' ? '/sign-up'
                           : '/sign-in'} className='form-link'>
                        {type == 'sign-in' ? 'Sign Up' : 'Sign In'}
                     </Link>
                  </footer>
               </>
            )

         }
      </section>
   )
}

export default AuthForm
