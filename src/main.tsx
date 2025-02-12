import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// ! all imports
import LandingPage from "@/routes/landing-page.tsx"


const r = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={r} />
    </StrictMode>,
)
