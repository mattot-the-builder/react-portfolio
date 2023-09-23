import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai'
import Image from 'next/image'
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'
import { useState } from 'react'

export default function Home () {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <title>Mattot </title>

      <main className='font-poppins bg-white dark:bg-gray-900 md:px-20 text-gray-900 dark:text-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>mattot.me</h1>
            <ul className='flex items-center'>
              {darkMode
                ? (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className='cursor-pointer text-2xl'
                  />
                  )
                : (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className='cursor-pointer text-2xl'
                  />
                  )}
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500  to-teal-500  hover:bg-gradient-to-l text-white px-4 py-2 rounded-md ml-8'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='font-burtons text-5xl py-2 text-teal-400 font-medium md:text-6xl'>
              Mattot the Builder 🚀
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl'>
              Full Stack Web Developer.
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-lg mx-auto'>
              Consequat auctor malesuada, sit maximus consequat neque vel nulla
              ullamcorper morbi.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle className='hover:text-teal-500' />
            <AiFillLinkedin className='hover:text-teal-500' />
            <AiFillGithub className='hover:text-teal-500' />
          </div>

          <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              Eget feugiat
              <span className='text-teal-500'> highlight </span>
              ultrices in duis vitae purus
              <span className='text-teal-500'> highlight </span>
              porta suscipit suscipit. Lectus pellentesque purus eget quam sem
              natoque dignissim at enim consequat dapibus maecenas, facilisis.
              Eget faucibus enim, gravida gravida nulla bibendum etiam placerat
              auctor vitae tincidunt sem pretium dui, nibh.
            </p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='dark:bg-gray-800/30 text-center shadow-lg p-10 rounded-xl my-10'>
              <Image
                className='mx-auto'
                src={design}
                width={100}
                height={100}
              />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className='py-4 text-teal-600'>Design Tools</h4>
              <p className='dark:text-gray-400 text-gray-800 py-1'>Photoshop</p>
              <p className='dark:text-gray-400 text-gray-800 py-1'>
                Adobe Illustrator
              </p>
              <p className='dark:text-gray-400 text-gray-800 py-1'>Figma</p>
            </div>

            <div className='dark:bg-gray-800/30 text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className='py-4 text-teal-600'>Design Tools</h4>
              <p className='dark:text-gray-400 text-gray-800 py-1'>Photoshop</p>
              <p className='dark:text-gray-400 text-gray-800 py-1'>
                Adobe Illustrator
              </p>
              <p className='dark:text-gray-400 text-gray-800 py-1'>Figma</p>
            </div>

            <div className='dark:bg-gray-800/30 text-center shadow-lg p-10 rounded-xl my-10'>
              <Image
                className='mx-auto'
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core
                design theory.
              </p>

              <h4 className='py-4 text-teal-600'>Design Tools</h4>
              <p className='dark:text-gray-400 text-gray-800 py-1'>Photoshop</p>
              <p className='dark:text-gray-400 text-gray-800 py-1'>
                Adobe Illustrator
              </p>
              <p className='dark:text-gray-400 text-gray-800 py-1'>Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              Eget feugiat
              <span className='text-teal-500'> highlight </span>
              ultrices in duis vitae purus
              <span className='text-teal-500'> highlight </span>
              porta suscipit suscipit. Lectus pellentesque purus eget quam sem
              natoque dignissim at enim consequat dapibus maecenas, facilisis.
              Eget faucibus enim, gravida gravida nulla bibendum etiam placerat
              auctor vitae tincidunt sem pretium dui, nibh.
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 '>
              <Image
                src={web1}
                className='rounded-lg object-cover'
                layout='responsive'
                width='100%'
                height='100%'
              />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image
                src={web2}
                className='rounded-lg object-cover'
                layout='responsive'
                width='100%'
                height='100%'
              />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image
                src={web3}
                className='rounded-lg object-cover'
                layout='responsive'
                width='100%'
                height='100%'
              />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image
                src={web4}
                className='rounded-lg object-cover'
                layout='responsive'
                width='100%'
                height='100%'
              />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image
                src={web5}
                className='rounded-lg object-cover'
                layout='responsive'
                width='100%'
                height='100%'
              />
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image
                src={web6}
                className='rounded-lg object-cover'
                layout='responsive'
                width='100%'
                height='100%'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
