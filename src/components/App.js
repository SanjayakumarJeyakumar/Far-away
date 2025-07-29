import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import PackingList from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);
  const numberOfItems = items.length;

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItem() {
    setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        itemsList={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItem}
      />
      <Footer items={items} />
    </div>
  );
}
