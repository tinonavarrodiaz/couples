import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes/Router.tsx'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
