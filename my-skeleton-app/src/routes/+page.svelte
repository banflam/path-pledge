<script lang="ts">
    import { enhance } from "$app/forms";
    export let form;
</script>

<h1>The PATH Pledge</h1>
<!-- <p>"Join OFTEN UPDATED NUMBER people who have taken the PATH pledge for a better ride"</p> -->

<p>I am a PATH rider who wants a better experience. I pledge to do the following:</p>

<ol>
    <li>Stand to the <em>side</em> of the door to <em>let all people off</em> before boarding</li>
    <li><em>Move in</em> to the center of the train to make space for others to board</li>
</ol>

<p>Take the pledge!</p>


{#if form?.success}
<p class="text-green-600 font-semibold text-center mt-4">
    Thank YOU for making it a better journey for everyone!
</p>
{:else}
<form use:enhance method="POST" class="mx-auto w-full max-w-md space-y-4">
    <input name="firstName" type="text" class="input" placeholder="First name" required />
    <input name="lastName" type="text" class="input" placeholder="Last name" required />
    <input name="email" type="email" class="input" placeholder="Email (optional)" />
    <select name="station" class="select" required>
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

<button type="submit" class="btn preset-filled">I pledge!</button>

</form>
{/if}


<!--
<p>Riders who have taken the pledge for a better ride</p>
-->

