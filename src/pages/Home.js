import React from 'react'
import build from '../assets/build.png'
import believe from '../assets/believe.png'
import tolerate from '../assets/tolerate.png'
import fight from '../assets/fight.png'
import gether from '../assets/in.png'

const Home = () => {
    return (
        <div className='bg-black mt-24 w-full text-white'>
            <p className='lg:text-6xl text-3xl lg:px-24 px-4 ml-2 font-bold'> Driven by the dream...</p>
            <p className='lg:text-2xl lg:my-6 lg:px-24 px-4   ml-2 '>to establish sustainable ecopolitical systems.</p>
            <div className='my-36 items-center lg:flex'>
                <img src={build} alt='building' />
                <div className='ml-8 mt-4 lg:ml-28'>
                    <p className='lg:text-5xl text-3xl font-bold'>Organization</p>
                    <p className='lg:text-5xl text-3xl lg:my-4 font-bold'>Profile</p>
                    <p className='lg:w-56 w-72'>
                        Established in 2020, RODLIP is an NPO that designs
                        and governs an ecopolitical system that guarantees
                        exellent conduct in the fields of economics and
                        politics throughout generations.
                    </p>
                </div>
            </div>
            <div className='lg:m-36 m-8 lg:flex'>
                <div className='w-full'>
                    <p className='text-3xl lg:text-5xl'>We believe in...</p>
                    <img className='mt-8' src={believe} alt='building' />
                </div>
                <div className='ml-0 lg:ml-28'>
                    <div className='flex mt-8 lg:mt-0 items-center'>
                        <p className='lg:text-3xl text-xl mr-6'>01</p>
                        <p className='lg:text-3xl text-xl lg:my-4'>Trying our best to create</p>
                    </div>
                    <p className='ml-12 lg:ml-16'>
                        a better future for the coming generations
                    </p>
                    <div className='flex mt-8 lg:mt-0 items-center'>
                        <p className='lg:text-3xl text-xl mr-6'>02</p>
                        <p className='lg:text-3xl text-xl lg:my-4'>Emplementing an</p>
                    </div>
                    <p className='ml-12 lg:ml-16'>
                        ecopolitical system that sustains every future
                        generation
                    </p>
                    <div className='flex mt-8 lg:mt-0 items-center'>
                        <p className='lg:text-3xl text-xl mr-6'>03</p>
                        <p className='lg:text-3xl text-xl lg:my-4'>Supporting every
                            philantropistic
                        </p>
                    </div>
                    <p className='ml-12 lg:ml-16'>
                        idea that promises a better word and shares our
                        vision
                    </p>
                </div>
            </div>
            <div className='lg:p-36 p-8 flex-row-reverse justify-between w-full lg:flex'>
                <div className='ml-2'>
                    <p className='text-3xl lg:text-5xl'>We don't tolerate...</p>
                    <img className='mt-8' src={tolerate} alt='building' />
                </div>
                <div className=''>
                    <div className='flex mt-8 lg:mt-0 items-center'>
                        <p className='lg:text-3xl text-xl mr-6'>01</p>
                        <p className='lg:text-3xl text-xl lg:my-4'>Racial prejudice</p>
                    </div>
                    <div className='flex mt-8 lg:mt-0 items-center'>
                        <p className='lg:text-3xl text-xl mr-6'>02</p>
                        <p className='lg:text-3xl text-xl lg:my-4'>Gender discrimination</p>
                    </div>
                    <div className='flex mt-8 lg:mt-0 items-center'>
                        <p className='lg:text-3xl text-xl mr-6'>03</p>
                        <p className='lg:text-3xl text-xl lg:my-4'>Toxic socioeconomic
                            profiling
                        </p>
                    </div>
                </div>
            </div>
            <div className='lg:p-36 p-8  justify-center w-full items-center lg:flex'>
                <div className='mr-8 lg:mr-20'>
                    <p className='text-3xl lg:text-5xl'>We fight for...</p>
                    <img className='mt-8' src={fight} alt='building' />
                </div>
                <div className=''>
                    <div className='i'>
                        <div className='flex mt-8 lg:mt-0 items-center'>
                            <p className='lg:text-3xl text-2xl mr-6'>∞</p>
                            <p className='lg:text-3xl text-xl mr-6'>
                                SUSTAINABLE
                                </p>

                        </div>
                        <p className='lg:text-3xl ml-10 lg:ml-0 text-xl mr-6'>
                            ECOPOLITICAL</p>
                        <p className='lg:text-3xl ml-10 lg:ml-0 text-xl mr-6'>
                            SYSTEMS</p>
                    </div>
                </div>
            </div>
            <div className='p-8 lg:p-20 mt-16 text-center'>
                <p className='text-3xl lg:text-6xl'>
                    "Simply by the meaning of a word, there is
                    always the previledge to satisfy its meaning
                    even if no one manages to.
                    "
                </p>
                <p className='text-xl lg:text-3xl mt-8'>
                    - Larry Kingstone, Founder.
                </p>
            </div>
            <div className='mx-8 lg:mx-36 mt-16 lg:mt-36  items-center lg:flex'>
                <div>
                    <p className='text-3xl lg:text-5xl'>Let's work together.
                    </p>
                    <img className='mt-8' src={gether} alt='building' />
                </div>
                <div className='ml-8 lg:ml-28'>
                    <div className='flex items-center'>
                        <p className=' text-xl lg:text-3xl my-3 lg:my-4'>Mailing Address</p>
                    </div>
                    <p className='ml-1'>Kensington, Johannesburg,

                    </p>
                    <p className='ml-1'>
                        Gauteng,
                    </p>
                    <p className='ml-1'>
                        South Africa
                    </p>
                    <div className='flex mt-2 lg:mt-8 items-center'>
                        <p className=' text-xl lg:text-3xl my-3 lg:my-4'>Phone Number
                        </p>
                    </div>
                    <p className='ml-1'>
                        +27 68 379 3865

                    </p>
                    <div className='flex mt-2 lg:mt-8 items-center'>
                        <p className=' text-xl lg:text-3xl my-3 lg:my-4'>Email Address
                        </p>
                    </div>
                    <p className='ml-1'>
                        info@rodlip.vertueal.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home