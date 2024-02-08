import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Initial = lazy(() =>
  import('./components/Initial').then((module) => ({
    default: module.Initial,
  })),
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Initial />,
  },
])
