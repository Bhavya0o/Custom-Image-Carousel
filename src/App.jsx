import React from 'react';
import Carousel from './Carousel';

const sampleImages = [
  "https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
];





function App() {
  return (
    <div style={{ padding: '40px' }}>


      <center><h1> <p> <b>Custom Image Carousel</b></p></h1></center>


      <Carousel images={sampleImages} autoPlay={true} interval={4000} />
    </div>
  );
}

export default App;
