 import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
            <img
              src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
            <MDBBtn color='light' rippleColor='dark'>
        Light
      </MDBBtn>
      <MDBBtn color='dark'>
        Dark
      </MDBBtn>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}