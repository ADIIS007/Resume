import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { TrialLogo } from './Logo.tsx';

function PrivateNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className='font-bold text-inherit'>ADIIS007</p>
      </NavbarBrand>
      <NavbarContent
        className='hidden sm:flex gap-4'
        justify='center'
      >
        <NavbarItem>
          <Link
            color='foreground'
            href='/'
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href='#'
            aria-current='page'
          >
            My Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='#'
          >
            Developers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <NavbarBrand>
            <TrialLogo />
            <Link
              color='foreground'
              href='/settings'
            >
              <p className='font-bold text-inherit'>ADIIS007</p>
            </Link>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default PrivateNavbar;
