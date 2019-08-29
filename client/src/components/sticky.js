import React from 'react'
import {StickyContainer, Sticky} from 'react-sticky'
export default props => {
  return (
    <StickyContainer>
        <Sticky>
          {({
            style,
 
            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <header style={style}>
              <h1 style={{background:'pink'}}>lorem</h1>
            </header>
          )}
        </Sticky>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio adipisci earum beatae praesentium atque voluptatem pariatur voluptates! Culpa odit quod laboriosam accusantium eos nisi placeat iure doloremque nihil perspiciatis.</p>

      </StickyContainer>
  )
}


