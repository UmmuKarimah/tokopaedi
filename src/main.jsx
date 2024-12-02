import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import Beranda from './pages/Beranda.jsx'
import Produk from './pages/Produk.jsx'
import Tentang from './pages/Tentang.jsx'
import DetailProduk from './pages/DetailProduk.jsx'
import Grafik from './pages/Grafik.jsx'
import Register from './pages/Register.jsx'
import Camera from './pages/Camera.jsx'
import FormIDB from './pages/FormIDB.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Beranda />
      },
      {
        path: "/detailproduk",
        element: <DetailProduk/>
      },
      {
        path: "/produk",
        element: <Produk />
      },
      {
        path: "/tentang",
        element: <Tentang />
      },
      {
        path: "/grafik",
        element: <Grafik />
      },
      {
        path: "/formIDB",
        element: <FormIDB />
      },
      {
        path: "/detailproduk/:id",
        element: <DetailProduk />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/camera",
        element: <Camera />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
