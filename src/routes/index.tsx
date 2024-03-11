import {
    createBrowserRouter,
    RouterProvider
  } from 'react-router-dom';
import FormInputField from '../uiElements/formElement/formInputField';

const router = createBrowserRouter([
    {
      path: '/',
      element: <div className='bg-primary h-screen'>
        <FormInputField type="text" name="Username" 
        placeholder='Username' icon1={<div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7.5C7 4.743 9.243 2.5 12 2.5C14.757 2.5 17 4.743 17 7.5C17 10.257 14.757 12.5 12 12.5C9.243 12.5 7 10.257 7 7.5ZM16.117 13.571C15.558 13.429 14.95 13.5091 14.447 13.7891C12.929 14.6331 11.071 14.6331 9.55298 13.7891C9.05098 13.5101 8.442 13.431 7.883 13.571C5.891 14.074 4.5 15.882 4.5 17.967V18.978C4.5 19.616 4.66998 20.2399 4.99298 20.7839C5.25598 21.2259 5.74902 21.501 6.27802 21.501H17.721C18.25 21.501 18.743 21.227 19.006 20.783C19.329 20.24 19.499 19.616 19.499 18.978V17.967C19.5 15.882 18.109 14.074 16.117 13.571Z" fill="#B1B0B3"/>
        </svg>
        </div>} />
      </div>
    }
])

const Router = () => {
    return <RouterProvider router={ router } />
}

export default Router;