import Particles from '../../components/public/particles';
import { Card } from '../../components/cards/card';
import Image from 'next/image';
import AnimatedLogo from '../../components/cards/logoAnimation';

function SettingsPage() {
  return (
    <div className='p-8'>
      <Particles
        className='fixed inset-0 -z-10 animate-fade-in min-h-full'
        quantity={1000}
      />
      <div className='relative pb-16 '>
        <div className='grid grid-cols-1 gap-8 mx-auto'>
          <Card>
            <article className='relative w-full h-full p-4 md:p-8'>
              <div className='flex'>
                <div className='flex-none place-content-center  items-center align-middle justify-center my-3 py-5 px-8'>
                  <div className='bg-emerald-500 w-60 h-60 rounded-full shadow-2xl'></div>
                </div>
                <div className='grow w-25 h-25'>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='text-xs text-zinc-100'>
                      <span>DEVALOPER</span>
                    </div>
                  </div>

                  <h2
                    id='featured-post'
                    className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
                  >
                    Hi! I&apos;m ADIIS007
                  </h2>
                  <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                    This is a great project I have built of Online resume
                    sharing template and creates a lot of adjusting features
                    like project status need not update everytime as its
                    directly linked to git and this makes the process soo
                    simpler that the problem is simplified . . .
                  </p>
                  <br />
                  <div className='w-full h-px bg-zinc-800' />
                  <div className='text-center'>
                    <h3 className='p-5 text-2xl'>My Developer Profiles</h3>
                    <button
                      type='button'
                      className='outline-none border border-gray-400 rounded px-4 py-2 mx-2'
                    >
                      <Image
                        src='social/git.svg'
                        width={35}
                        height={35}
                        alt={'GitHub'}
                      />
                    </button>
                    <button
                      type='button'
                      className='outline-none border border-gray-400 rounded px-4 py-2 mx-2'
                    >
                      <Image
                        src='social/leetcode.svg'
                        width={35}
                        height={35}
                        alt={'Leetcode'}
                      />
                    </button>
                    <button
                      type='button'
                      className='outline-none border border-gray-400 rounded px-4 py-2 mx-2'
                    >
                      <Image
                        src='social/discord.svg'
                        width={35}
                        height={35}
                        alt={'Discord'}
                      />
                    </button>
                    <button
                      type='button'
                      className='outline-none border border-gray-400 rounded px-4 py-2 mx-2'
                    >
                      <Image
                        src='social/twitter.svg'
                        width={35}
                        height={35}
                        alt={'Twitter'}
                      />
                    </button>
                    <button
                      type='button'
                      className='outline-none border border-gray-400 rounded px-4 py-2 mx-2'
                    >
                      <Image
                        src='social/linkedin.svg'
                        width={35}
                        height={35}
                        alt={'Linkedin'}
                      />
                    </button>
                    <button
                      type='button'
                      className='outline-none border border-gray-400 rounded px-4 py-2 mx-2'
                    >
                      <Image
                        src='social/kaggle.svg'
                        width={35}
                        height={35}
                        alt={'Kaggle'}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className='p-3'></div>
              <div className='w-full h-px bg-zinc-800' />

              <div className='text-center'>
                <h1 className='text-1xl text-zinc-100 group-hover:text-white sm:text-4xl font-display p-3'>
                  Tech Stacks profficient In
                </h1>
                <div className='grid grid-cols-2 gap-4 p-3'>
                  <div className='grid grid-cols-4 gap-2'>
                    <div className='outline-none border border-gray-400 rounded px-4 py-2 mx-2 w-55 h-55 place-items-center'>
                      <AnimatedLogo
                        imgName={'Java'}
                        imgSrc={'techstack/java.svg'}
                      />
                    </div>
                    <div className='outline-none border border-gray-400 rounded px-4 py-2 mx-2 w-55 h-55 place-items-center'>
                      <AnimatedLogo
                        imgName={'Flutter'}
                        imgSrc={'techstack/flutter.svg'}
                      />
                    </div>
                    <div className='outline-none border border-gray-400 rounded px-4 py-2 mx-2 w-55 h-55 place-items-center'>
                      <AnimatedLogo
                        imgName={'TypeScript'}
                        imgSrc={'techstack/typescript.svg'}
                      />
                    </div>
                    <div className='outline-none border border-gray-400 rounded px-4 py-2 mx-2 w-55 h-55 place-items-center'>
                      <AnimatedLogo
                        imgName={'Node.js'}
                        imgSrc={'techstack/nodejs.svg'}
                      />
                    </div>
                  </div>
                  <div className='grid grid-cols-4 gap-2'>
                    <div className='outline-none border border-gray-400 rounded px-4 py-2 mx-2 w-55 h-55 place-items-center'>
                      <AnimatedLogo
                        imgName={'Angular'}
                        imgSrc={'techstack/angular.svg'}
                      />
                    </div>
                    <div className='outline-none border border-gray-400 rounded px-4 py-2 mx-2 w-55 h-55 place-items-center'>
                      <AnimatedLogo
                        imgName={'Spring Boot'}
                        imgSrc={'techstack/springboot.svg'}
                      />
                    </div>
                    <div className='outline-none border border-gray-400 rounded px-4 py-2 mx-2 w-55 h-55 place-items-center'>
                      <AnimatedLogo
                        imgName={'React'}
                        imgSrc={'techstack/react.svg'}
                      />
                    </div>
                    <div className='outline-none border border-gray-400 rounded px-4 py-2 mx-2 w-55 h-55 place-items-center'>
                      <AnimatedLogo
                        imgName={'Android'}
                        imgSrc={'techstack/android.svg'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Card>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-8 mx-auto pb-16'>
        <Card>
          <article className='relative w-full h-full p-4 md:p-8'>
            <div className='justify-center text-center'>
              <h1 className='text-1xl text-zinc-100 group-hover:text-white sm:text-4xl font-display p-4'>
                Acadamic Life
              </h1>
              <br />
              <div className='grid grid-cols-1 gap-4'>
                <div className='grid grid-rows-1 grid-flow-col gap-4 outline-none border border-gray-400 rounded p-3'>
                  <div>Year</div>
                  <div>Syllabus</div>
                  <div>Specialization</div>
                  <div>Grade</div>
                  <div>Marks</div>
                  <div>University</div>
                </div>
                <div className='grid grid-rows-1 grid-flow-col gap-4 outline-none border border-gray-400 rounded p-3'>
                  <div>2024</div>
                  <div>JNTU-H</div>
                  <div>Computer science</div>
                  <div>Btech</div>
                  <div>8.42</div>
                  <div>CVR</div>
                </div>
                <div className='grid grid-rows-1 grid-flow-col gap-4 outline-none border border-gray-400 rounded p-3'>
                  <div>2020</div>
                  <div>CBSE</div>
                  <div>MPC-CS</div>
                  <div>XII</div>
                  <div>89%</div>
                  <div>KV1U</div>
                </div>
                <div className='grid grid-rows-1 grid-flow-col gap-4 outline-none border border-gray-400 rounded p-3'>
                  <div>2018</div>
                  <div>CBSE</div>
                  <div>N/A</div>
                  <div>X</div>
                  <div>72%</div>
                  <div>KV1U</div>
                </div>
              </div>
            </div>
          </article>
        </Card>
      </div>

      <div className='grid grid-cols-1 gap-8 mx-auto pb-16'>
        <Card>
          <article className='relative w-full h-full p-4 md:p-8'>
            <div className='justify-center text-center'>
              <h1 className='text-1xl text-zinc-100 group-hover:text-white sm:text-4xl font-display p-4'>
                Projects Overview
              </h1>
              <br />
              
            </div>
          </article>
        </Card>
      </div>
    </div>
  );
}

export default SettingsPage;
