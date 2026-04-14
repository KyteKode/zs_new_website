<script lang="ts">
    import slogan from "$lib/assets/slogan.png";
    import small_slogan from "$lib/assets/small_slogan.png";
    
    import { black_img, white_img, blue_img, red_img } from "$lib/placeholder_img";
</script>

<img src={slogan} alt="Stop the snap." class="hidden xs:block">
<img src={small_slogan} alt="Stop the snap." class="block xs:hidden">

<p>Isn't it annoying when your zipper gets stuck on your shirt or neck?</p>
<p class="font-semibold text-3xl">ZipShield is your solution.</p>

<div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 my-10 mx-10">
    <img src={ black_img } alt="" class="w-full rounded-[15%] aspect-square object-cover overflow-hidden" />
    <img src={ white_img } alt="" class="w-full rounded-[15%] aspect-square object-cover overflow-hidden" />
    <img src={ blue_img } alt="" class="w-full rounded-[15%] aspect-square object-cover overflow-hidden" />
    <img src={ red_img } alt="" class="w-full rounded-[15%] aspect-square object-cover overflow-hidden" />
</div>

<p>Zipshield slides onto your zipper and hangs onto the inside of your jacket to stop it from flailing. It is easy to make, being 3D printed with inexpensive PLA filament.</p>

<h2 class="mb-4">You can buy it at:</h2>
<div class="grid grid-cols-1 xs:grid-cols-3 gap-4 xs:gap-8">
    <a href="/buy/target" class="bg-slate-300 text-black rounded-2xl px-5 py-3 transition hover:scale-110 hover:bg-slate-400 flex flex-col justify-center items-center">Target</a>
    <a href="/buy/walmart" class="bg-slate-300 text-black rounded-2xl px-5 py-3 transition hover:scale-110 hover:bg-slate-400 flex flex-col justify-center items-center">Walmart</a>
    <a href="/buy" class="bg-blue-500 font-semibold rounded-2xl px-5 py-3 transition duration-300 hover:shadow-[0_0_20px_#60a5fa] hover:scale-110 hover:bg-blue-400 `flex flex-col justify-center items-center">This Website</a>
</div>