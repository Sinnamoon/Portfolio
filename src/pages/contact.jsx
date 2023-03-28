import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}


export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_n2vbwet',
        'template_8auw1f3',
        form.current,
        'BO9VO6ameR2BzELQ8'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('Email sent successfully')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  

  return (
    <>
      <Head>
        <title>Contact - Joan Glendinning</title>
        <meta name="description" content="Get in touch with me" />
      </Head>
      <SimpleLayout
        title="Get in touch with me"
        intro="Send me an email for any inquiries or just to chat."
      >
        <section>
          <div class="mx-auto max-w-screen-md px-4">
            {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> */}
            <form ref={form} onSubmit={sendEmail} class="space-y-8">
              <div>
                <label
                  for="Email"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="user_email"
                  class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  for="Name"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="user_name"
                  class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="How can I help you"
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div class="flex justify-center">
                <Button onClick={() => alert("Thank you for your message!")}
                  // type="submit"
                  // value="Send"
                  className="mx-auto rounded border-0 py-2 px-8 text-lg text-white focus:outline-none"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </section>
      </SimpleLayout>
    </>
  )
  
}
