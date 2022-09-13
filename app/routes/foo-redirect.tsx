import { json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader: LoaderFunction = async () => {
  return json({ message: 'Hello world' })
}

export default function FooRedirect() {
  const { message } = useLoaderData();

  return (
    <div>foo-redirect: {message}</div>
  )
}
