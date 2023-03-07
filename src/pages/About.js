import React from 'react'
import puzzle from '../assets/puzzle.png'
import mission from '../assets/mission.png'

const About = () => {
    return (
        <div className='w-full bg-black flex flex-col items-center'>
            <p className='text-4xl lg:text-5xl pl-28 my-4 lg:my-24 text-white text-left w-full font-bold'>About Us</p>
            <div className='lg:flex w-full justify-center'>
                <img className='w-full lg:w-1/3' src={puzzle} alt='ago' />
                <p className='w-72 lg:text-xl text-white ml-4 my-4 lg:my-0 lg:ml-28'>
                    We see every ecopolitical failure under the sun
                    as an opportunity to excel in what those who were in leadership,
                    failed to achieve.
                </p>
            </div>
            <div className='w-full my-16'>
                <div className='text-2xl my-24 flex justify-center text-white text-center w-full uppercase'>
                    <p className='px-8 lg:px-20 py-1 text-black bg-white border px-auto'>Mission</p>
                </div>
                <div className='lg:flex w-full items-center justify-center px-0 lg:px-28'>
                    <img className='w-full lg:w-1/2' src={mission} alt='ago' />
                    <div className='w-72 ml-4 lg:ml-28 mt-6 lg:mt-0 lg:text-xl text-white'>
                        <p className='mb-6'>
                            RODLIP Org is setting out to lay a
                            foundation for a sustainable ecopolitical
                            system that guarantees ecopolitical
                            exellency in every generation to come.
                        </p>
                        <p className=''>
                            We believe in the ideology of democratic
                            law which according to us simply means a
                            shared vision of the ideology of a perfect
                            ecopolitical structure.
                        </p>
                        <p className='mb-6'>
                            As a way to remind ourselves of our
                            priority, we named our organization,
                            RODLIP an acronym for Rule Of
                            Democratic Law Ideology Protocol.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full my-16'>
                <div className='text-2xl my-24 flex justify-center text-white text-center w-full uppercase'>
                    <p className='px-8 lg:px-20 py-1 text-black bg-white border px-auto'>Vision</p>
                </div>
                <div className='lg:flex w-full flex-row-reverse items-center justify-center px-0 lg:px-28'>
                    <img className='w-full lg:w-1/2' src={mission} alt='ago' />
                    <div className='w-72 ml-4 lg:ml-28 mt-6 lg:mt-0 lg:text-xl text-white'>
                        <p className='mb-6'>
                            We envision a world where freedom from
                            ecopolitical crisis is experienced by all.
                        </p>
                        <p className='mb-6'>
                            We envision a world where ecopolitical leadership
                            can not be manipulated at the expense of nationals,
                            by corrupt leaders.
                        </p>
                        <p className='mb-6'>
                            We envision a world where those in leadership are 
                            sustained on their seats only by consistant fulfillment
                            of their promises.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About