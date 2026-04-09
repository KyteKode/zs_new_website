<script lang="ts">
    import placeholder_img from "$lib";

    enum ZSColor {
        Black,
        White,
        Blue,
        Red
    }

    let selected: ZSColor = ZSColor.Black;

    let names: Record<string, HTMLParagraphElement | null> = {
        black: null,
        white: null,
        blue: null,
        red: null
    }



    let buy_amt: number = $state(1);
    let price: number = $state(3.99);

    $effect(() => {
        price = buy_amt * 3.99;
    })



    function select_color(color: ZSColor) {
        Object.values(names).forEach(btn => btn?.classList.add("text-white\/25"));

        let selected_name: HTMLParagraphElement | null = null;

        switch (color) {
            case ZSColor.Black:
                selected_name = names.black;
                break;
            case ZSColor.White:
                selected_name = names.white;  
                break;
            case ZSColor.Blue:
                selected_name = names.blue;
                break;
            case ZSColor.Red:
                selected_name = names.red;
        }

        selected_name?.classList.remove("text-white\/25");
        selected = color;
    }
</script>

<h1>Buy ZipShield</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 m-36 mt-5 w-full gap-10 sm:gap-6 lg:gap-52">

<div class="max-w-full max-h-[65vh]">
    <img src={placeholder_img} alt="" class="w-full rounded-[10%]" />
</div>

<div class="flex flex-col items-center justify-center gap-7.5 w-full">
    <h2>Color:</h2>

    <div class="flex flex-row items-center justify-center gap-4 w-full">
        <div class="flex flex-col items-center gap-2 w-1/4">
            <p bind:this={names.black} class="font-semibold mx-0.5 my-0 transition-colors duration-300">Black</p>
            <button onclick={() => select_color(ZSColor.Black)} class="bg-gradient-to-b from-gray-900 to-zinc-800 p-5 rounded-full border-2 border-white size-14 transition duration-300 hover:shadow-[0_0_20px_#101828] hover:scale-110"></button>
        </div>
        <div class="flex flex-col items-center gap-2 w-1/4">
            <p bind:this={names.white} class="font-semibold mx-0.5 my-0 transition-colors duration-300 text-white/25">White</p>
            <button onclick={() => select_color(ZSColor.White)} class="bg-gradient-to-b from-slate-300 to-white p-5 rounded-full border-2 border-white size-14 transition duration-300 hover:shadow-[0_0_20px_white] hover:scale-110"></button>
        </div>
        <div class="flex flex-col items-center gap-2 w-1/4">
            <p bind:this={names.blue} class="font-semibold mx-0.5 my-0 transition-colors duration-300 text-white/25">Blue</p>
            <button onclick={() => select_color(ZSColor.Blue)} class="bg-gradient-to-b from-blue-500 to-sky-400 p-5 rounded-full border-2 border-white size-14 transition duration-300 hover:shadow-[0_0_20px_#2b7fff] hover:scale-110"></button>
        </div>
        <div class="flex flex-col items-center gap-2 w-1/4">
            <p bind:this={names.red} class="font-semibold mx-0.5 my-0 transition-colors duration-300 text-white/25">Red</p>
            <button onclick={() => select_color(ZSColor.Red)} class="bg-gradient-to-b from-red-600 to-rose-400 p-5 rounded-full border-2 border-white size-14 transition duration-300 hover:shadow-[0_0_20px_#e7000b] hover:scale-110"></button>
        </div>
    </div>

    <div class="flex flex-row gap-5 items-center justify-center w-5/6">
        <label for="buy_amt" class="whitespace-nowrap shrink-0">Amount to buy: </label>
        <input type="number" id="buy_amt" name="amount" min="1" bind:value={buy_amt} class="bg-white rounded-2xl text-black h-10 p-4 w-full min-w-0" />
    </div>

    <button class="bg-blue-500 font-semibold rounded-2xl px-5 py-4 transition duration-300 hover:shadow-[0_0_20px_#60a5fa] hover:scale-110 w-5/6">
        Add to Cart
        <span class="bg-blue-300 rounded-full px-2 py-1.5 ml-2">${price.toFixed(2)}</span>
    </button>
</div>

</div>