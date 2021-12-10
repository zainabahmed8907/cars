import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
     return (
         <Container>
              <Section
              title="Model S"
              description="Order online for touchless delivery"
              backgroundImg="model-s.jpg"
              leftButtonText="Order online"
              rightButtonText="Existing Inventory"
              />

             <Section
              title="Model X"
              description="Order online for touchless delivery"
              backgroundImg="model-x.jpg"
              leftButtonText="Order online"
              rightButtonText="Existing Inventory"
              />
               <Section
              title="Model Y"
              description="Order online for touchless delivery"
              backgroundImg="model-y.jpg"
              leftButtonText="Order online"
              rightButtonText="Existing Inventory"
              />
                <Section
              title="Solar Panel"
              description="Lower cost solar panel"
              backgroundImg="solar-panel.jpg"
              leftButtonText="Order online"
              rightButtonText="Existing Inventory"
              />
                 <Section
              title="Accessories"
              description="Lower cost solar panel"
              backgroundImg="accessories.jpg"
              leftButtonText="Order online"
              rightButtonText="Existing Inventory"
              />
         </Container>
     )
}
const Container=styled.div `

     height:100vh;

`
export default Home
