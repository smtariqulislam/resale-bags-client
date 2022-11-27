import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <div className='flex bg-violet-700 flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl text-center text-white '>Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className='text-center text-red-400'>{error.statusText || error.message}</p>
            <p className='text-white text-9xl' >{error.status}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage
