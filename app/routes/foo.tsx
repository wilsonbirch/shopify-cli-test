import { json } from '@remix-run/node'
import { Form, Outlet, useActionData, useLoaderData } from '@remix-run/react'

export const loader = () => {
  return json({ message: 'Hello world' })
}

export const action = async ({ request }: any) => {
  const body = await request.formData()
  return Object.fromEntries(body.entries())
}

export default function Foo() {
  const loaderData = useLoaderData<{ message: string }>()
  const actionData = useActionData<{
    first_name: string
  }>()
  return (
    <div style={{ width: 200, height: 200, background: 'red' }}>
      <p>{actionData?.first_name}</p>
      <Form method='POST'>
        <input name='first_name' />
        <input name='last_name' />
        <button>Submit</button>
      </Form>
      <Outlet />
    </div>
  )
}
