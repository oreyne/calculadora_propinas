import type { MenuItem } from "../types"

type MenuItemProps = {
  item : MenuItem,
  addItem: (id : MenuItem) => void
}

export default function MenuItem({ item, addItem } : MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-400 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
      >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
