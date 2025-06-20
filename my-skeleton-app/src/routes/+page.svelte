<script lang="ts">
    import { enhance } from "$app/forms";
    import {TypeWriter} from 'svelte-typewrite'
    export let form;
</script>

<div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
  <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl space-y-8">
    
    <div class="text-center space-y-4">
      <h1 class="text-3xl font-bold text-gray-800">
        The PATH Pledge
      </h1>
      <p class="text-gray-600 text-base">
        I am a PATH rider who wants a <span class="font-semibold text-blue-700"><TypeWriter typeSpeed={200} deleteSpeed={220} afterTyped={{wait: 600}} afterDeleted={{wait: 120}} blinkDuration={100000000000} texts={['better', 'safer', 'faster', 'more efficient', 'more courteous']}/></span>experience.
      </p>
      <p class="text-gray-600 text-base text-left">I pledge to:</p>
      <ol class="list-decimal list-inside text-left text-gray-700 space-y-2">
        <li>
          Stand to the <span class="font-semibold text-blue-700">side</span> of the door to 
          <span class="font-semibold text-blue-700">let all people off</span> before boarding.
        </li>
        <li>
          <span class="font-semibold text-blue-700">Move in</span> to the center of the train 
          to make space for others to board.
        </li>
      </ol>
    </div>

    {#if form?.success}
      <p class="text-green-600 font-semibold text-center">
        Thank YOU for making it a better journey for everyone!
      </p>
    {:else}
      <form use:enhance method="POST" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="firstName" type="text" placeholder="First name" required
            class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg shadow-sm focus:ring focus:ring-blue-200" />
          <input name="lastName" type="text" placeholder="Last name" required
            class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg shadow-sm focus:ring focus:ring-blue-200" />
        </div>

        <input name="email" type="email" placeholder="Email (optional)"
          class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg shadow-sm focus:ring focus:ring-blue-200" />

        <select name="station" required
          class="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg shadow-sm focus:ring focus:ring-blue-200">
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

        <button type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
          I pledge!
        </button>
      </form>
    {/if}
  </div>
</div>