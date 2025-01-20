import React, { useEffect, useState } from 'react';
import PlantCard from '../components/PlantCard';
import snakePlant from '../assets/snake-plant.jpeg'
import spiderPlant from '../assets/spider-plant.jpeg'
import lilyPlant from '../assets/lily-plant.jpeg'

const PLANTS_DATA = [
  {
    id: '1',
    name: 'Snake Plant',
    price: 15,
    image: snakePlant,
    description: 'Produces oxygen at night, improving air quality',
    category: 'Air Purifying'
  },
  {
    id: '2',
    name: 'Spider Plant',
    price: 12,
    image: spiderPlant,
    description: 'Filters formaldehyde and xylene from the air',
    category: 'Air Purifying'
  },
  {
    id: '3',
    name: 'Peace Lily',
    price: 18,
    image: lilyPlant,
    description: 'Removes mold spores and purifies the air',
    category: 'Air Purifying'
  },
  // Add more plants...
];

export default function ProductsPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(PLANTS_DATA.map(plant => plant.category)));
    setCategories(uniqueCategories);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      {categories.map(category => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANTS_DATA.filter(plant => plant.category === category).map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

