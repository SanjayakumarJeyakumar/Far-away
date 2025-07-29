export default function Footer({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        👜 Start adding some items to your packing list 🚀
      </p>
    );

  const numberOfItems = items.length;
  const numberOfItemsPacked = items.filter((item) => item.packed).length;
  const percentageOfItemsPacked = (numberOfItemsPacked / numberOfItems) * 100;

  return (
    <footer className="stats">
      {percentageOfItemsPacked === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          💼You have {numberOfItems} items on your list, and you already packed{" "}
          {numberOfItemsPacked}
          {""} ( {percentageOfItemsPacked.toFixed(2)}% )
        </em>
      )}
    </footer>
  );
}
