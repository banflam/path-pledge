<script lang="ts">
    import { enhance } from "$app/forms";
    export let form;
</script>

<div class="text-center space-y-4">

<h1 class="text-3xl font-extrabold tracking-tight text-gray-800">The PATH Pledge</h1>
<!-- <p>"Join OFTEN UPDATED NUMBER people who have taken the PATH pledge for a better ride"</p> -->

<p class="text-lg text-gray-600 max-w-2xl mx-auto">I am a PATH rider who wants a better experience. I pledge to do the following:</p>

<ol class="list-decimal list-inside text-left max-w-xl mx-auto space-y-2 text-gray-700">
    <li>Stand to the <em class="font-semibold text-blue-700">side</em> of the door to <em>let all people off</em> before boarding</li>
    <li><em class="font-semibold text-blue-700">Move in</em> to the center of the train to make space for others to board</li>
</ol>
</div>

{#if form?.success}
<p class="text-green-600 font-semibold text-center mt-4">
    Thank YOU for making it a better journey for everyone!
</p>
{:else}
<form use:enhance method="POST" class="mx-auto w-full max-w-md space-y-4">
    <input name="firstName" type="text" class="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-lg shadow-sm focus:ring focus:ring-blue-200" placeholder="First name" required />
    <input name="lastName" type="text" class="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-lg shadow-sm focus:ring focus:ring-blue-200" placeholder="Last name" required />
    <input name="email" type="email" class="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-lg shadow-sm focus:ring focus:ring-blue-200" placeholder="Email (only if you want updates)" />
    <select name="station" class="w-full px-4 py-2 border border-gray-300 bg-white text-black rounded-lg shadow-sm focus:ring focus:ring-blue-200" required>
        <option value="" disabled selected>Your home station</option>
        <option value="Newport">Newport</option>
        <option value="Newark">Newark</option>
        <option value="Harrison">Harrison</option>
        <option value="Journal Square">Journal Square</option>
        <option value="Grove Street">Grove Street</option>
        <option value="Exchange Place">Exchange Place</option>
        <option value="World Trade Center">World Trade Center</option>
        <option value="Hoboken">Hoboken</option>
        <option value="Christopher Street">Christopher Street</option>
        <option value="9th Street">9th Street</option>
        <option value="14th Street">14th Street</option>
        <option value="23rd Street">23rd Street</option>
        <option value="33rd Street">33rd Street</option>
    </select>

<button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">I pledge!</button>

</form>
{/if}


<!--
<p>Riders who have taken the pledge for a better ride</p>
-->

