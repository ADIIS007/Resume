//This will make /signup

import Link from 'next/link';
import React from 'react';
import Particles from '../../components/public/particles';

function SignupPage() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={100}
      />
      <div className='text-center animate-fade-in'>
        <section className='text-center text-indigo-600'>
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-indigo-600 md:text-2xl dark:text-white'>
                  Sign Up
                </h1>
                <form
                  className=' space-y-4 md:space-y-6'
                  action='#'
                >
                  <div className='text-left'>
                    <label
                      htmlFor='email'
                      className='block mb-2 text-sm font-medium text-indigo-900 dark:text-white'
                    >
                      Your email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='name@company.com'
                    />
                  </div>
                  <div className='text-left'>
                    <label
                      htmlFor='password'
                      className='block mb-2 text-sm font-medium text-indigo-900 dark:text-white'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='••••••••'
                      className='bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          id='remember'
                          aria-describedby='remember'
                          type='checkbox'
                          className='w-4 h-4 border border-indigo-300 rounded bg-indigo-50 focus:ring-3 focus:ring-primary-300 dark:bg-indigo-700 dark:border-indigo-600 dark:focus:ring-primary-600 dark:ring-offset-indigo-800'
                        />
                      </div>
                      <div className='ml-3 text-sm'>
                        <label
                          htmlFor='remember'
                          className='text-indigo-500 dark:text-indigo-300'
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  >
                    Sign Up
                  </button>
                  <p className='text-sm font-light text-indigo-500 dark:text-indigo-400'>
                    Already have a account?{' '}
                    <Link
                      href='/login'
                      className='font-medium text-indigo-600 hover:underline dark:text-primary-500'
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignupPage;