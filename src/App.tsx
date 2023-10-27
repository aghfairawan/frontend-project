import AppProvider from './Provider/AppProvider'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Category, Login, Register, } from './pages'
import { PublicLayout, AnotherLayout } from './layouts'
import { CategoryEdit, CategoryNew } from './containers'

function App() {

  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        
        {
          path: '/category',
          element: <Category />
        },
        {
          path: '/category/new',
          element: <CategoryNew />
        },
        {
          path: '/category/edit/:id',
          element: <CategoryEdit />
        },

        
       
        
      ]
    },
    {
      element: <AnotherLayout />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register/>
        },
        
      ]
    }
  ])

  return (
    // cara lama tapi masih di pakai
    // <BrowserRouter>
    //   <AppProvider>
    //     <Routes>
    //       <Route element={<PublicLayout />}>
    //         <Route path={'/'} element={<Home />}/>
    //         <Route path={'/product'} element={<Product />} />
    //         <Route path={'/profile'} element={<Profile />} />
    //       </Route>
    //     </Routes>
    //   </AppProvider>
    // </BrowserRouter>
    <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>
  )
}

export default App