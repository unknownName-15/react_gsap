import ReactLenis from 'lenis/react';
import Navbar from './sections/Navbar';

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen">
      <Navbar />
      <section id="home" className='h-screen bg-amber-500'></section>
      <section id="services" className='h-screen bg-indigo-500'></section>
      <section id="about" className='h-screen bg-gray-500'></section>
      <section id="work" className='h-screen bg-amber-500'></section>
      <section id="contact" className='h-screen bg-amber-500'></section>
    </ReactLenis>
  );
};

export default App;
