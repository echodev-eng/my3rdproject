import { useState, type FormEvent } from 'react'
import { Form } from 'react-aria-components'
import { Button, TextField } from './components'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const email = String(new FormData(form).get('email')).trim()
    // TODO: send the email to a backend or email service.
    console.log('Email submitted:', email)
    setMessage(`Thanks! We'll be in touch at ${email}.`)
    form.reset()
  }

  return (
    <main className="landing">
      <h1>Hello Michael</h1>
      <Form className="signup-form" onSubmit={handleSubmit}>
        <TextField
          className="signup-email"
          name="email"
          type="email"
          aria-label="Email address"
          placeholder="you@example.com"
          isRequired
        />
        <Button type="submit">Submit</Button>
      </Form>
      <p className="message" role="status">
        {message}
      </p>
    </main>
  )
}

export default App
