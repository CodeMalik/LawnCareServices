'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaHome, FaPhone, FaTools, FaLeaf } from 'react-icons/fa';

// ✅ Define type for dynamically imported motion.div
const MotionDiv = dynamic(
    () =>
        import('framer-motion').then((mod) => {
            // ✅ Explicitly type the return to ensure correctness
            const MotionDivComponent = mod.motion.div as React.ComponentType<
                React.HTMLAttributes<HTMLDivElement> & {
                    initial?: any;
                    animate?: any;
                    transition?: any;
                    whileHover?: any;
                    whileTap?: any;
                }
            >;
            return MotionDivComponent;
        }),
    { ssr: false }
);

// ✅ Define interface for navigation link item (optional, for scalability)
interface NavLink {
    href: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
    hoverBgColor: string;
    textColor: string;
}

// ✅ Define the nav links array with explicit typing
const navLinks: NavLink[] = [
    {
        href: '/',
        icon: <FaHome className="text-green-600 text-xl" />,
        title: 'Go Home',
        description: 'Return to the homepage',
        bgColor: 'bg-green-100',
        hoverBgColor: 'group-hover:bg-green-200',
        textColor: 'text-green-600',
    },
    {
        href: '/services',
        icon: <FaTools className="text-green-600 text-xl" />,
        title: 'Our Services',
        description: 'Explore what we offer',
        bgColor: 'bg-green-100',
        hoverBgColor: 'group-hover:bg-green-200',
        textColor: 'text-green-600',
    },
    {
        href: '/contact',
        icon: <FaPhone className="text-green-600 text-xl" />,
        title: 'Contact Us',
        description: 'Get in touch for help',
        bgColor: 'bg-green-100',
        hoverBgColor: 'group-hover:bg-green-200',
        textColor: 'text-green-600',
    },
];

// ✅ Main component — no internal state or effects used, but properly typed if added
export default function NotFound() {
    // ✅ If you later add state, it will be typed:
    // const [someState, setSomeState] = useState<string>('initial');

    // ✅ useEffect is imported but unused — that’s fine, but if used:
    // useEffect(() => { ... }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col pt-24">
            <main className="flex-grow flex items-center justify-center px-4 py-16 sm:py-24">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto w-full"
                >
                    <div className="relative inline-block mb-6">
                        <div className="absolute -inset-1 bg-green-100 rounded-full blur opacity-30"></div>
                        <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                            <div className="text-9xl font-bold text-green-600">404</div>
                            <div className="text-2xl font-semibold text-gray-800 mt-4">
                                Oops! Page Not Found
                            </div>
                            <p className="mt-3 text-gray-600">
                                The page you're looking for might have been removed, had its
                                name changed, or is temporarily unavailable.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                            >
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${link.bgColor} ${link.hoverBgColor} transition-colors`}
                                >
                                    {link.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800">{link.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                            </Link>
                        ))}
                    </div>
                </MotionDiv>
            </main>
        </div>
    );
}