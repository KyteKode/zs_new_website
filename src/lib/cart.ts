import { writable } from "svelte/store";
import { browser } from "$app/environment";
import ZSColor from "./zs_color";

const stored = browser ? localStorage.getItem("cart") : null;
const cart = writable<Partial<Record<ZSColor, number>>>(
    stored ? JSON.parse(stored) : {},
);
export default cart;

cart.subscribe((val) => {
    if (browser) {
        localStorage.setItem("cart", JSON.stringify(val));
    }
});