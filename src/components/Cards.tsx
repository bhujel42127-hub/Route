export default function Cards() {
  const cards = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Card Title ${i + 1}`,
    description: `This is the description for card ${i + 1}.`,
  }));

  return (
    <div className="p-6">
      <div
        className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
