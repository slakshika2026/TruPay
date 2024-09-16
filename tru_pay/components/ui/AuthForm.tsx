"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from "@/components/ui/CustomInput";
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions';





const AuthForm = ({ type }: { type: string }) => {
   const router = useRouter();
   const [user, setUser] = useState(null);
   const [isLoading, setIsLoading] = useState(false);


   const formSchema = authFormSchema(type);

   //  Define form.
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: ""
      },
   })

   //  Define submit handler
   const onSubmit = async (data: z.infer<typeof formSchema>) => {
      setIsLoading(true);


      try {
         //Sign up with appwrite & create plaid token
         if (type === 'sign-up') {
            const newUser = await signUp(data);
            setUser(newUser);

         }


         if (type === 'sign-in') {
            const response = await signIn({
               email: data.email,
               password: data.password
            })
            if (Response) router.push('/')
         }



      } catch (error) {
         console.log(error);


      } finally {
         setIsLoading(false);
      }



   };

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
                              <div className="flex flex-row gap-5">
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

                              </div>



                              <CustomInput
                                 control={form.control}
                                 name="address1"
                                 label='Address'
                                 placeholder='Enter your specific address' />

                              <CustomInput
                                 control={form.control}
                                 name="city"
                                 label='City'
                                 placeholder='Example: NY' />

                              <div className="flex flex-row gap-5">
                                 <CustomInput
                                    control={form.control}
                                    name="state"
                                    label='State'
                                    placeholder='Example: NY' />

                                 <CustomInput
                                    control={form.control}
                                    name="postalCode"
                                    label='Postal Code'
                                    placeholder='Example: 11101' />
                              </div>

                              <div className="flex flex-row gap-5">
                                 <CustomInput
                                    control={form.control}
                                    name="dateOfBirth"
                                    label='Date Of Birth'
                                    placeholder='YYYY-MM-DD' />

                                 <CustomInput
                                    control={form.control}
                                    name="ssn"
                                    label='SSN'
                                    placeholder='Example: 1234' />
                              </div>
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
