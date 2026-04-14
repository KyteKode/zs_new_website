<script lang="ts">
    import { flip } from "svelte/animate";

    import { black_img, white_img, blue_img, red_img } from "$lib/placeholder_img";
    import ZSColor, { zs_color_img } from "$lib/zs_color";
    import cart from "$lib/cart";

    import CartNotif from "$lib/components/cart_notif.svelte";

    let selected: ZSColor = ZSColor.Black;

    let labels: Partial<Record<ZSColor, HTMLParagraphElement | null>> = {};

    let buy_amt: number = $state(1);
    let price: number = $state(3.99);

    let current_img = $state(black_img);

    $effect(() => {
        price = buy_amt * 3.99;
    });

    function select_color(color: ZSColor) {
        Object.values(labels).forEach((btn) =>
            btn?.classList.add("text-white\/25"),
        );
        labels[color]?.classList.remove("text-white\/25");
        selected = color;

        current_img = zs_color_img(selected);
    }

    interface Notification {
        id: number;
        color: ZSColor;
    }

    let notifs: Notification[] = $state([]);
    let next_id = 0;

    function add_to_cart() {
        const id = next_id--;
        notifs.push({ id, color: selected });
        cart.update((current) => ({
            ...current,
            [selected]: (current[selected] ?? 0) + 1,
        }));
    }

    function remove_notif(id: number) {
        notifs = notifs.filter((n) => n.id !== id);
    }
</script>

<h1>Buy ZipShield</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 m-36 mt-5 w-full gap-10 sm:gap-6 lg:gap-52">
    <div class="max-w-full max-h-[65vh]">
        <img src={current_img} alt="" class="w-full rounded-[10%] aspect-square object-cover overflow-hidden" />
    </div>

    <div class="flex flex-col items-center justify-center gap-7.5 w-full">
        <h2>Color:</h2>

        <div class="flex flex-row items-center justify-center gap-4 w-full">
            <div class="flex flex-col items-center gap-2 w-1/4">
                <p bind:this={labels[ZSColor.Black]} class="font-semibold mx-0.5 my-0 transition-colors duration-300">Black</p>
                <button onclick={() => select_color(ZSColor.Black)} class="bg-gradient-to-b from-gray-900 to-zinc-800 p-5 rounded-full border-2 border-white size-14 transition duration-300 hover:shadow-[0_0_20px_#101828] hover:scale-110 hover:from-gray-800 hover:to-zinc-700"></button>
            </div>
            <div class="flex flex-col items-center gap-2 w-1/4">
                <p bind:this={labels[ZSColor.White]} class="font-semibold mx-0.5 my-0 transition-colors duration-300 text-white/25">White</p>
                <button onclick={() => select_color(ZSColor.White)} class="bg-gradient-to-b from-slate-300 to-white p-5 rounded-full border-2 border-white size-14 transition duration-300 hover:shadow-[0_0_20px_white] hover:scale-110 hover:from-slate-200"></button>
            </div>
            <div class="flex flex-col items-center gap-2 w-1/4">
                <p bind:this={labels[ZSColor.Blue]} class="font-semibold mx-0.5 my-0 transition-colors duration-300 text-white/25">Blue</p>

                <button onclick={() => select_color(ZSColor.Blue)} class="bg-gradient-to-b from-blue-500 to-sky-400 p-5 rounded-full border-2 border-white size-14 transition duration-300 hover:shadow-[0_0_20px_#2b7fff] hover:scale-110 hover:from-blue-400 hover:to-sky-300"></button>
            </div>
            <div class="flex flex-col items-center gap-2 w-1/4">
                <p bind:this={labels[ZSColor.Red]} class="font-semibold mx-0.5 my-0 transition-colors duration-300 text-white/25">Red</p>
                <button onclick={() => select_color(ZSColor.Red)} class="bg-gradient-to-b from-red-600 to-rose-400 p-5 rounded-full border-2 border-white size-14 transition duration-300 hover:shadow-[0_0_20px_#e7000b] hover:scale-110 hover:from-red-500 hover:to-rose-300"></button>
            </div>
        </div>

        <div class="flex flex-row gap-5 items-center justify-center w-5/6">
            <label for="buy_amt" class="whitespace-nowrap shrink-0">Amount to buy: </label>
            <input type="number" id="buy_amt" name="amount" min="1" bind:value={buy_amt} class="bg-white rounded-2xl text-black h-10 p-4 w-full min-w-0" />
        </div>

        <button onclick={add_to_cart} class="bg-blue-500 font-semibold rounded-2xl px-5 py-4 transition duration-300 hover:shadow-[0_0_20px_#60a5fa] hover:scale-110 w-5/6">
            Add to Cart
            <span class="bg-blue-300 rounded-full px-2 py-1.5 ml-2">${price.toFixed(2)}</span>
        </button>
    </div>
</div>

<div class="fixed bottom-3 right-3 flex flex-col gap-3">
    {#each notifs as notif (notif.id)}
        <div animate:flip={{ duration: 300 }}>
            <CartNotif color={notif.color} ondelete={() => remove_notif(notif.id)} />
        </div>
    {/each}
</div>
