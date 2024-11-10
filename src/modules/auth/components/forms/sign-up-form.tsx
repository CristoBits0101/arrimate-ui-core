'use client'

// Actions
import SignUp from '@/modules/auth/actions/sign-up'

// Alerts
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Inputs
import EmailInput from '@/modules/auth/components/inputs/email-input'
import NameInput from '@/modules/auth/components/inputs/name-input'
import PasswordInput from '@/modules/auth/components/inputs/password-input'

// Next
import { useLocale } from 'next-intl'

// React
import { useState, useTransition } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

// Shadcn
import { Form } from '@/modules/ui/form'

// Zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema } from '@/modules/auth/schemas'

export default function SignUpForm() {

  // Receive messages indicating the outcome of the form submission
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  // Manage asynchronous operations
  const [isPending, startTransition] = useTransition()

  // Used to initialize the form and manage its state when rendering
  const form = useForm<z.infer<typeof SignUpSchema>>({

    // Validates each time the form is submitted
    resolver: zodResolver(SignUpSchema),

    // Values ​​before submitting the form
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  // Values is initialized with user data received from the schema
  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {

    // Reset values
    setError('')
    setSuccess('')

    // Sent data to server
    startTransition(() => {
      SignUp(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((err) => {
          console.error('Error en SignUp:', err)
          setError('Ocurrió un error inesperado.')
        })
    })
  }

  return (
    <CardWrapper
      pageNameRedirect='Sign In'
      redirectButtonLabel='Already have an account? '
      redirectButtonHref={`/${useLocale()}/sign-in`}
      showSocial={true}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <NameInput name='name' isPending={isPending} />
              <EmailInput name='email' isPending={isPending} />
              <PasswordInput name='password' isPending={isPending} />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton message='Sign Up' isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  )
}