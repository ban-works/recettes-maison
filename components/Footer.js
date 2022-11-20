import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// const instagramPath = 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772'
//     + ' 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.0'
//     + '12 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.1'
//     + '53c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-'
//     + '1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-'
//     + '2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.9'
//     + '02 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.'
//     + '63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35'
//     + '.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058'
//     + ' 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054'
//     + '.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.'
//     + '748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058'
//     + '-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1'
//     + '.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.'
//     + '333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z';

// const navigation = {
//     social: [
//         {
//             name: 'Facebook',
//             href: 'https://www.facebook.com/flotiq',
//             icon: (props) => (
//                 <svg fill="currentColor" viewBox="0 0 13 25" {...props}>
//                     <path
//                         fillRule="evenodd"
//                         d="M8.30466 24.1211V13.5346H11.8761L12.407 9.38964H8.30466V6.74947C8.30466
//                         5.55339 8.63791 4.73447 10.3545 4.73447H12.5297V1.03902C11.4714 0.925596
//                         10.4076 0.870832 9.34316 0.874974C6.18633 0.874974 4.01891 2.80214 4.01891
//                         6.34002V9.38189H0.470703V13.5268H4.02666V24.1211H8.30466Z"
//                         clipRule="evenodd"
//                     />
//                 </svg>
//             ),
//         },
//     ],
// };

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
