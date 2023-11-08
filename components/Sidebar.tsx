// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';


//  function AsideMenu = ({ isOpen, toggleMenu }) => {
//   return (
//     <AsideMenuContainer isOpen={isOpen}>
//       <HamburgerButton onClick={toggleMenu}>&#9776;</HamburgerButton>
//       <CloseButton onClick={toggleMenu}>&times;</CloseButton>
//       <ul>
//         <li>Menu Item 1</li>
//         <li>Menu Item 2</li>
//         <li>Menu Item 3</li>
//       </ul>
//     </AsideMenuContainer>
//   );
// };


// const slideIn = keyframes`
//   from {
//     transform: translateX(-100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// `;

// const AsideMenuContainer = styled.aside<{ isOpen: boolean }>`
//   position: fixed;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 250px;
//   background-color: #333;
//   color: #fff;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   transform: translateX(-100%);
//   transition: transform 0.3s ease;
//   animation: ${(props) => (props.isOpen ? slideIn : 'none')} 0.3s ease;
// `;

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   color: #fff;
//   font-size: 1.5rem;
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   right: 10px;
// `;

// const HamburgerButton = styled.button`
//   background: none;
//   border: none;
//   color: #fff;
//   font-size: 1.5rem;
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   left: 10px;
// `;

// interface AsideMenuProps {
//   isOpen: boolean;
//   toggleMenu: () => void;
// }

// export default AsideMenu;
