<script lang="ts">    
    import placeholder_img from "$lib/placeholder_img";
    import ZSColor, { zs_color_img } from "$lib/zs_color";

    let { color = ZSColor.Black, ondelete } = $props();

    let notif: HTMLDivElement;

    setTimeout(() => {
        delete_notif(1000);
    }, 3000)

    function delete_notif(time: number, manual: boolean = false) {
        notif.style.transitionDuration = `${time}ms`
        notif.classList.add("opacity-0");

        if (manual) {
            notif.classList.add("scale-0");
        }

        setTimeout(() => {
            ondelete?.();
        }, time)
    }
</script>

<div bind:this={notif} class="bg-white text-black p-2 rounded-2xl w-50 h-32 relative flex flex-row gap-2 items-center justify-center transition">
    <img src={zs_color_img(color)} alt="" class="w-1/2 rounded-2xl"/>
    <span class="w-1/2">Added {color} ZipShield to cart!</span>

    <button onclick={() => delete_notif(150, true)} class="bg-slate-300 border border-slate-700 rounded-full aspect-square w-7.5 h-7.5 flex flex-col justify-center text-3xl absolute -top-2 -left-2 transition hover:scale-120 hover:bg-slate-400">&times;</button>
</div>