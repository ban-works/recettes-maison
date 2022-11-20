import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => (
    <footer className="flex flex-col items-center justify-center">
        <div
            className="md:w-auto px-5 md:px-0 mt-8
                flex flex-col items-center space-y-5 md:space-y-8"
        >
            <Link href="/" passHref>
                <a href="replace">
                    <div
                        style={{ paddingLeft: '20px' }}
                        className="block w-[82px] md:w-[103px] h-8 md:h-12 relative"
                    >
                        <Image
                            src="/assets/logo.png"
                            alt="Logo"
                            width="40"
                            height="40"
                        />
                    </div>
                </a>
            </Link>

            {/* <div className="flex items-center justify-center space-x-4 md:space-x-3">
                {navigation.social.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        className="text-gray hover:text-gray-500 p-3"
                        rel="noreferrer"
                    >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                ))}
            </div> */}
        </div>

        <div
            className="font-sora w-auto px-2 md:px-5 py-5 mt-20
                inline-flex justify-between md:justify-center items-center
                bg-light-gray rounded-t-lg"
        >
            <p className="text-center text-xs md:text-base font-light">
                A website created by banworks using next js and flotiq recipe
                starter
            </p>
        </div>
    </footer>
)

export default Footer
