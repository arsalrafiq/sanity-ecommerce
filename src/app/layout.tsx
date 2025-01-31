import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import { getCurrentSession } from '@/actions/auth';
import { SanityLive } from '@/sanity/lib/live';
import HeaderCategorySelector from '@/components/layout/HeaderCategorySelector';
import Cart from '@/components/cart/Cart';
import Script from 'next/script';
import { Suspense } from 'react';
import AnalyticsTracker from '@/components/layout/AnalyticsTracker';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { user } = await getCurrentSession();

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
                <Header 
                    user={user}
                    categorySelector={<HeaderCategorySelector />}
                />
                <Script
                    src='https://cloud.umami.is/script.js'
                    data-website-id='7a2bcf2d-6e8f-456c-b23a-5a9461aa184d'
                    strategy='beforeInteractive'
                />
                <main className="relative flex min-h-screen flex-col">
                    <Suspense>
                        <AnalyticsTracker
                            user={user}
                        />
                    </Suspense>
                    {children}
                    <Cart />
                    <SanityLive />
                </main>
            </body>
        </html>
    );
}

// import type { Metadata } from 'next';
// import './globals.css';
// import { Inter } from 'next/font/google';
// import Header from '@/components/layout/Header';
// import { getCurrentSession } from '@/actions/auth';
// import { SanityLive } from '@/sanity/lib/live';
// import HeaderCategorySelector from '@/components/layout/HeaderCategorySelector';
// import Cart from '@/components/cart/Cart';
// import Script from 'next/script';
// import { Suspense } from 'react';
// import AnalyticsTracker from '@/components/layout/AnalyticsTracker';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// };

// const RootLayout = async ({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) => {
//     const { user } = await getCurrentSession();

//     return (
//         <html lang='en'>
//             <body className={`${inter.className} antialiased bg-white min-h-[125vh]`}>
//                 <Header 
//                     user={user}
//                     categorySelector={<HeaderCategorySelector />}
//                 />
//                 <Script
//                     src='https://cloud.umami.is/script.js'
//                     data-website-id='(YOUR UMAMI WEBSITE ID)'
//                     strategy='beforeInteractive'
//                 />

//                 <Suspense>
//                     <AnalyticsTracker
//                         user={user}
//                     />
//                 </Suspense>

//                 {children}

//                 <Cart />
//                 <SanityLive />
//             </body>
//         </html>
//     );
// };

// export default RootLayout;
