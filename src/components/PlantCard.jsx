import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/ui/button';
import { addToCart } from '../store/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.plant.id === plant.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={plant.image || "/placeholder.jpg"}
          alt={plant.name}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
          SALE
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{plant.name}</h3>
        <p className="text-red-500 font-bold mt-1">${plant.price}</p>
        <p className="text-gray-600 text-sm mt-2">{plant.description}</p>
        <Button
          onClick={() => dispatch(addToCart(plant))}
          disabled={isInCart}
          className="w-full mt-4 bg-green-600 hover:bg-green-700"
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
}

