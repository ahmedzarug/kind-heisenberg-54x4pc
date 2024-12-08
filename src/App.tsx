import React, { useState } from 'react';

interface CheatItem {
  id: number;
  title: string;
  description: string;
}

const defaultCheatItems: CheatItem[] = [
  { id: 1, title: 'Infinite Health', description: 'Makes the player invincible' },
  { id: 2, title: 'Infinite Ammo', description: 'Gives the player unlimited ammo' },
  { id: 3, title: 'Level Select', description: 'Allows the player to select any level' },
];

const MtaCheat = () => {
  const [cheatItems, setCheatItems] = useState(defaultCheatItems);
  const [newCheatItem, setNewCheatItem] = useState({ title: '', description: '' });
  const [showForm, setShowForm] = useState(false);

  const handleAddCheatItem = () => {
    const newCheatItemId = cheatItems.length + 1;
    const newCheatItemToAdd = { id: newCheatItemId, title: newCheatItem.title, description: newCheatItem.description };
    setCheatItems([...cheatItems, newCheatItemToAdd]);
    setNewCheatItem({ title: '', description: '' });
    setShowForm(false);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">MTA Cheat Codes</h1>
      <ul>
        {cheatItems.map((cheatItem) => (
          <li key={cheatItem.id} className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-lg font-bold">{cheatItem.title}</h2>
              <p className="text-gray-600">{cheatItem.description}</p>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add New Cheat'}
      </button>
      {showForm && (
        <form className="mt-4">
          <input
            type="text"
            placeholder="Cheat Title"
            value={newCheatItem.title}
            onChange={(e) => setNewCheatItem({ ...newCheatItem, title: e.target.value })}
            className="block w-full p-2 mb-2 border border-gray-400 rounded"
          />
          <textarea
            placeholder="Cheat Description"
            value={newCheatItem.description}
            onChange={(e) => setNewCheatItem({ ...newCheatItem, description: e.target.value })}
            className="block w-full p-2 mb-2 border border-gray-400 rounded"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddCheatItem}
          >
            Add Cheat
          </button>
        </form>
      )}
    </div>
  );
};

export default MtaCheat;