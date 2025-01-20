import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import heroBg from '../assets/hero-bg.jpg'

export default function LandingPage() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl text-white m-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome To Paradise Nursery</h1>
          <p className="text-xl mb-8">Where Green Meets Serenity</p>
          
          <div className="prose prose-invert mb-8">
            <p>
              At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission
              is to provide a wide range of high-quality plants that not only enhance the beauty of your
              surroundings but also contribute to a healthier and more sustainable lifestyle.
            </p>
            <p>
              Our team of experts is dedicated to ensuring that each plant meets our strict standards of
              quality and care. Whether you're a seasoned gardener or just starting your green journey,
              we're here to support you every step of the way.
            </p>
            <p>
              Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today
              and experience the beauty of nature right at your doorstep.
            </p>
          </div>

          <Link to="/products">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

