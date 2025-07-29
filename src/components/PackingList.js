import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  itemsList,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = itemsList;
  } else if (sortBy === "description") {
    sortedItems = itemsList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = [
      ...itemsList.filter((item) => !item.packed),
      ...itemsList.filter((item) => item.packed),
    ];
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItem}>Clear list</button>
      </div>
    </div>
  );
}
