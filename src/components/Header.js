import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {

     const [burgerStatus,setburgerStatus]=useState(false);
     return (
     
          <Container>
               <a>
                    <img src='./images/logo.svg' alt=''/>
               </a>
               <Menu>
                    <a href='#'>Model S</a>
                    <a href='#'>Model 3</a>
                    <a href='#'>Model X</a>
                    <a href='#'>Model Y</a>
               </Menu>
               <RightMenu>
                    <a href="">Shop</a>
                    <a href="">Tesla Account</a>
                    <MenuIcon onClick={()=>setburgerStatus(true)} />
               </RightMenu>
               <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                         <CloseIcon onClick={()=>setburgerStatus(false)}/>
                    </CloseWrapper>

                    <li>
                         <a href='#'>Existing Inventory</a>
                         
                    </li>
                    <li>
                         <a href='#'>Used Inventory</a>
                         
                    </li>
                    <li>
                         <a href='#'>Trade-in</a>
                         
                    </li> 
                    <li>
                         <a href='#'>CyberTruck</a>
                         
                    </li> 
                    <li>
                         <a href='#'>Roadster</a>
                         
                    </li> 
                    <li>
                         <a href='#'>Existing Inventory</a>
                         
                    </li>
                     <li>
                         <a href='#'>Existing Inventory</a>
                         
                    </li> 
                    <li>
                         <a href='#'>Existing Inventory</a>
                         
                    </li> 
                    
               </BurgerNav>
          </Container>
     )
}
const Container=styled.div `
     min-height:60px;
     position:fixed;
     display:flex;
     align-items:center;
     justify-content:space-between;
     padding:0 20px;
     top:0;
     left:0;
     right:0;
     z-index:1;
     

`
const Menu=styled.div `
     display:flex;
     align-items:center;
     justify-content:center;
     flex:1;
     a{
          font-weight:600;
          text-transsform:uppercase;
          padding:0 10px;
          flex-wrap:no-wrap;

     }
`

const RightMenu=styled.div `
     display:flex;
     align-items:center;
     a{
          font-weight:600;
          text-transsform:uppercase;
          margin-right:10px;

     }
`
const CustomMenu=styled(MenuIcon)`
     cursor:pointer;

`
const BurgerNav=styled.div `
     position:fixed;
     top:0;
     bottom:0;
     right:0;
     cursor:pointer;
     z-index:16;
     width:300px;
     list-style:none;
     padding:20px;
     display:flex;
     flex-direction:column;
     text-align:start;
     transform:${props=>props.show ? "translateX(0)" :"translateX(100%)"}
     justify-content:flex-start;
     transition:transform 0.2s ease-in;
     background:white;

     li{
          padding:15px 0;
          border-bottom:1px solid rgba(0,0,0,0.2);
          a{
               font-weight:600;
          }
     }

`
const CustomClose=styled(CloseIcon) `
     cursor:pointer;
`
const CloseWrapper=styled.div `
     display:flex;

     justify-content:flex-end;

`
export default Header
