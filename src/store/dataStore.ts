import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type InventoryItem } from "../types/datatypes";
import { categoryOptions } from "../types/datatypes";

interface ItemState {
  inventory: InventoryItem[];
  addInventoryItem: (
    name: string,
    quantity: number,
    price: number,
    category: InventoryItem["category"],
  ) => void;
  // deleteInventoryItem: (id: string) => void;
}


const IdItems = (category: InventoryItem["category"]) => categoryOptions.find((c) => c.value === category)?.id ?? category;


export const useItemStore = create<ItemState>()(
  persist(
    (set) => ({
      // Default initial items used only if localStorage is completely empty
      inventory: [
        {
          id: "1",
          name: "เมาส์ไร้สาย Logitech",
          quantity: 25,
          price: 590,
          category: "Electronics",
          date: "2026-10-01",
        },
        {
          id: "2",
          name: "ปากกาลูกลื่น (กล่อง 50 ด้าม)",
          quantity: 12,
          price: 150,
          category: "Stationery",
          date: "2026-10-02",
        },
        {
          id: "3",
          name: "ข้าวหอมมะลิ 5 กก.",
          quantity: 40,
          price: 185,
          category: "Grocery",
          date: "2026-10-03",
        },
        {
          id: "4",
          name: "เสื้อยืดคอกลม",
          quantity: 60,
          price: 199,
          category: "Clothing",
          date: "2026-10-03",
        },
        {
          id: "5",
          name: "ไขควงชุด 12 ชิ้น",
          quantity: 8,
          price: 320,
          category: "Tools",
          date: "2026-10-03",
        },
        {
          id: "6",
          name: "สาย USB-C 1 เมตร",
          quantity: 100,
          price: 89,
          category: "Electronics",
          date: "2026-10-04",
        },
      ],
      // Date.now().toString(),
      addInventoryItem: (name, quantity, price, category) =>
        set((state) => ({
          inventory: [
            {
              id: IdItems(category).toString(),
              name,
              quantity,
              price,
              category,
              date: new Date().toISOString().split("T")[0],
            },
            ...state.inventory,
          ],
        })),

    }),
    {
      // Unique key name for the localStorage entry
      name: "inv-670610354",
    },
  ),
);
