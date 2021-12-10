import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal"

function Section({title,description,backgroundImg,leftButtonText,rightButtonText}) {
     return (
         <Wrap bgImage={backgroundImg}>
             
               <Fade top>
                         <ItemText>
                         <h1>{title}</h1>
                         <p>{description}</p>
                         </ItemText>
               </Fade>
               <Fade bottom>
                    <ButtonGroup>
                         <LeftButton>
                         {leftButtonText}
                         </LeftButton>
                    
                              {rightButtonText && <RightButton>
                              {rightButtonText}
                              </RightButton>}

                    
                    </ButtonGroup>
               </Fade>
               
               <DownArrow src="/images/down-arrow.svg"/>
         </Wrap>
     )
}
const Wrap=styled.div `
     z-index:10;
     height:100vh;
     width:100vw;
     background-image:url('images/model-s.jpg');
     background-position:center;
     background-size:cover;
     background-repeat:no-repeat;
     display:flex;
     flex-direction:column;
     justify-content:space-between;
     align-items:center;
     background-image: ${props=> `url("./images/${props.bgImage}")`}
`
const ItemText=styled.div `
     padding-top:15vh;
     text-align:center;
`
const ButtonGroup=styled.div `
     display:flex;
     margin-bottom:30px;
     @media (max-width:768px)
     {
          flex-direction:column;
     }
`
const LeftButton= styled.button `
     background-color:rgba(23,26,32,0.8);
     height:40px;
     width:246px;
     color:white;
     border-radius:100px;
     text-transform:uppercase;
   
     justify-content:center;
     align-items:center;
     opacity:0.85;
     font-size:12px;
     border:none;
     cursor:pointer;
     margin:8px;

`
const RightButton=styled(LeftButton) `
     background:white;
     color:black;
     opacity:0.65;
`
const DownArrow=styled.img `
     margin-top:20px;
     height:40px;
     animation:animationDown infinite 1.5s;
     overflow-x:hidden;

`

export default Section
