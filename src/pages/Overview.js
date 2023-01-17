import React from 'react'
import ago from '../assets/ago.png'
import brian from '../assets/brian.png'
import tolerate from '../assets/tolerate.png'
import fight from '../assets/fight.png'
import gether from '../assets/in.png'
import glow from '../assets/glow.jpg'
import Carousell from '../componets/Carousel'

const Overview = () => {
    return (
        <div className='bg-black w-full text-white'>
            <p className='text-4xl lg:text-6xl lg:p-24 lg:ml-2 text-center font-bold w-full'> Errors in our current Ecopolitical
                system causes
            </p>
            <div className='flex justify-center'>
                <Carousell />
            </div>
            <div className='lg:my-36 items-center lg:flex'>
                <img src={ago} alt='ago' />
                <div className='ml-8 lg:ml-28'>
                    <p className='text-3xl lg:text-5xl font-bold'>Centuries ago</p>
                    <p className='w-4/5 lg:w-1/2'>
                        All morden ecopolitiical systems
                        owe it to the ancient states like
                        the ancient Greece and Rome
                        that laid a foundation for the
                        principle which we now simply
                        call democracy

                    </p>
                    <p className='w-4/5 lg:w-1/2'>
                        These states' exellency in their
                        times has motivated RODLIP Org
                        to design and pursue what it calls
                        democratic law ideology which its
                        certain can bring positive change
                        in our sophisticated world

                    </p>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${glow})` }} className='w-full py-32 px-8 lg:px-56'>
            <p className='px-8 bg-white text-black py-1 '>Ideology</p>
            <div className='flex lg:justify-end w-full'>
                    <p className='w-full lg:w-72 text-xl'>
                        The ideology we believe as we
                        mentioned earlier is the rule of
                        democratic law. This ideology
                        basically states that simply by the
                        meaning of a word, there will always
                        be a previledge to satisfy its
                        meaning even no one manages to.
                    </p>
                </div>
                <div className='flex my-20 w-full'>
                    <p className='w-72 text-xl'>
                        For example, as long as the term
                        perfect leadership exists, there is
                        always a priviledge for someone to
                        be a perfect leader even if no one
                        ever manages.

                    </p>
                </div>
                <div className='flex my-20 lg:justify-end w-full'>
                    <p className='w-72 text-xl'>
                        Simply because the phrase zero
                        percentag unemployment rate
                        exists, there is always the priviledge
                        to eliminate unemployment even if
                        that never happens.
                    </p>
                </div>
                <div className='flex my-20  w-full'>
                    <p className='w-72 text-xl'>
                        Simply because the phrase
                        sustainable global economic
                        system exists, there will always
                        be a prividge to achieve that
                        goal even if that never
                        happens.
                    </p>
                </div>
                <div className='flex my-20  w-full'>
                    <p className='w-72 text-xl'>
                        Now we suppose you understand at least a
                        bit about our ideology. We are commited
                        to believe in this under every
                        circumstance and quoting Brian Houston
                        "Never bring your theology down to the
                        level of your experience, be commited to
                        lifting your experience up to your belief.",
                        we find additional motivation to move
                        forward with our mission.
                    </p>
                </div>
            </div>
                <div className='flex text-center flex-col my-20 items-center justify-center w-full'>
                    <img className='w-full lg:w-2/3 ' src={brian} alt='brian' />
                    <p className='my-4 text-xl lg:text-4xl'>
                        Brian Houston
                    </p>
                    <p className='w-full px-4 lg:px-0 lg:w-2/3 text-xl'>
                        sharing at the end of 2021 where he thought the following year was 2023,
                         amazing enough this were
                        some of his final messages before he stepped down and we joyfully 
                        hold to the encouragement now that
                        we are in the year he mentioned.
                    </p>
                </div>
        </div>
    )
}

export default Overview