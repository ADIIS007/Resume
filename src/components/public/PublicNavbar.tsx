import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@nextui-org/react';
import { TrialLogo } from './Logo.tsx';
import Link from 'next/link';

function PublicNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <TrialLogo />
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
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/login'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            href='signup'
            variant='flat'
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default PublicNavbar;
