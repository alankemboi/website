import React, { FC, FunctionComponent } from 'react';
// import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import MobileMenu from '@components/MobileMenu';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { ColorSchemeToggle } from '@components/ColorSchemeToggle/ColorSchemeToggle';

export interface NavItemProps {
  href: string;
  text: string;
}
export const NavItem: FC<NavItemProps> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router?.asPath === href;
  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        {text}
      </a>
    </NextLink>
  );
};
export const Header: FunctionComponent = () => (
  <div>
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 ">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div className="ml-[-0.60rem]">
          <MobileMenu />
          <NavItem href="/" text="Home" />
          <NavItem href="/guestbook" text="Guestbook" />
          <NavItem href="/dashboard" text="Dashboard" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/snippets" text="Snippets" />
        </div>
        <ColorSchemeToggle />
      </nav>
    </div>
    {/* <main id="skip" className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">
              {children}
              <Footer />
            </main> */}
  </div>
);
