<script lang="ts">
    import ZSColor, { zs_color_img } from "$lib/zs_color";
    import cart from "$lib/cart";

    import plus from "$lib/assets/plus.svg";
    import minus from "$lib/assets/minus.svg";

    interface CartItem {
        color: ZSColor;
        amount: number;
    }

    let items: CartItem[] = $state([]);
    let total_price: number;

    render();

    function render() {
        total_price = 0;

        items = [];
        for (const c of Object.values(ZSColor)) {
            if (typeof c == "number") {
                break;
            }

            let enum_c = c as ZSColor;
            items.push({
                color: enum_c,
                amount: $cart[enum_c] ?? 0,
            });

            total_price += $cart[enum_c] ?? 0;
        }
    }

    function inc_color(color: ZSColor) {
        cart.update((current) => {
            let new_amt = (current[color] ?? 0) + 1;
            return { ...current, [color]: new_amt };
        });
        render();
    }

    function dec_color(color: ZSColor) {
        cart.update((current) => {
            let new_amt = (current[color] ?? 0) - 1;
            return { ...current, [color]: Math.max(new_amt, 1) };
        });
        render();
    }

    function remove_color(color: ZSColor) {
        cart.update((current) => ({ ...current, [color]: 0 }));
        render();
    }

    function empty_cart() {
        items.forEach(item => {
            if (item.amount != 0) {
                return false;
            }
        })
        return true;
    }
</script>

<h1 class="mb-5">Cart</h1>

{#if !empty_cart()}
    <p>You haven't bought anything yet.</p>
{:else}
    <div class="hidden sm:grid grid-cols-2 gap-5">
        {#each items as item (item.color)}
            {#if item.amount > 0}
                <div class="bg-white text-black p-2 rounded-2xl w-full max-w-96 aspect-5/7 flex flex-col gap-2 items-center justify-center transition relative">
                    <span class="text-3xl sm:text-[2.5rem] w-full">{item.color} ZipShield</span>

                    <img src={zs_color_img(item.color)} class="w-3/4 rounded-2xl my-3" />

                    <div class="flex flex-row gap-2 sm:gap-4">
                        <button onclick={() => remove_color(item.color)} class="w-16 aspect-square rounded-full p-2.5 border-3 border-slate-500 bg-slate-300 transition duration-250 hover:border-rose-600 hover:bg-rose-400 hover:scale-120 hover:text-red-950">
                            <svg class="w-full h-full stroke-current">
                                <svg viewBox="0 0 30.9476 31.4642">
                                    <g fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" style="mix-blend-mode:normal">
                                        <path d="M7.3622 30.35 3.7864 10.5976l22.9259.1084-3.5759 19.7524z" />
                                        <path d="M15.4738 11.7276v18.7308M7.9815 7.4706V1h14.8144v5.7895M1 7.641h28.9476" />
                                    </g>
                                </svg>
                            </svg>
                        </button>

                        <div class="flex flex-row gap-4 px-4 items-center justify-center rounded-full border-3 border-slate-500 bg-slate-300">
                            <button onclick={() => dec_color(item.color)} class="w-10 sm:w-12 aspect-square p-2.5 transition duration-250 hover:scale-120">
                                <img src={minus} />
                            </button>

                            <span class="text-black text-3xl">{item.amount}</span>

                            <button onclick={() => inc_color(item.color)} class="w-12 aspect-square p-2.5 transition duration-250 hover:scale-120">
                                <img src={plus} />
                            </button>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>

    <div class="grid sm:hidden grid-cols-2 gap-5">
        {#each items as item (item.color)}
            {#if item.amount > 0}
                <div class="bg-white text-black p-2 rounded-2xl w-full max-w-96 aspect-5/7 flex flex-col gap-2 items-center justify-center transition relative">
                    <span class="text-3xl sm:text-[2.5rem] w-full">{item.color} ZipShield</span>

                    <img src={zs_color_img(item.color)} class="w-3/4 rounded-2xl my-3" />

                    <div class="flex flex-row gap-1">
                        <button onclick={() => remove_color(item.color)} class="w-12 aspect-square rounded-full p-2.5 border-3 border-slate-500 bg-slate-300 transition duration-250 hover:border-rose-600 hover:bg-rose-400 hover:scale-120 hover:text-red-950">
                            <svg class="w-full h-full stroke-current">
                                <svg viewBox="0 0 30.9476 31.4642">
                                    <g fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" style="mix-blend-mode:normal">
                                        <path d="M7.3622 30.35 3.7864 10.5976l22.9259.1084-3.5759 19.7524z" />
                                        <path d="M15.4738 11.7276v18.7308M7.9815 7.4706V1h14.8144v5.7895M1 7.641h28.9476" />
                                    </g>
                                </svg>
                            </svg>
                        </button>

                        <div class="flex flex-row gap-1 items-center justify-center rounded-full border-3 border-slate-500 bg-slate-300">
                            <button onclick={() => dec_color(item.color)} class="w-9 aspect-square p-2.5 transition duration-250 hover:scale-120">
                                <img src={minus} />
                            </button>

                            <span class="text-black text-2xl">{item.amount}</span>

                            <button onclick={() => inc_color(item.color)} class="w-9 aspect-square p-2.5 transition duration-250 hover:scale-120">
                                <img src={plus} />
                            </button>
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>

    <button class="m-5 bg-blue-500 font-semibold rounded-2xl px-5 py-4 transition duration-300 hover:shadow-[0_0_20px_#60a5fa] hover:scale-110 w-5/6 text-2xl">
        Order
        <span class="bg-blue-300 rounded-full px-2 py-1.5 ml-2 text-2xl">${total_price.toFixed(2)}</span>
    </button>
{/if}