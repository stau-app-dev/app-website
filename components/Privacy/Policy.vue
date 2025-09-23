<template>
  <div class="px-4 md:px-16 lg:px-20 py-16 leading-relaxed">
    <h1 class="font-serif text-4xl md:text-5xl font-bold text-center">
      Privacy <span class="text-primary">Policy</span>
    </h1>
    <div class="flex justify-center">
      <hr class="border-b-4 border-solid w-8/12 my-12 border-primary" />
    </div>
    <div class="paragraphs bg-gray-50 p-8 rounded-lg">
      <p>
        The St. Augustine CHS App Development Team is dedicated to protecting
        every student and teacher's privacy. This privacy policy applies to the
        use of our app.
      </p>
      <p class="underline">
        Your information is not, will not, and has never been sold or given to
        third parties outside of our database provider and is only used for the
        functionality of the St. Augustine CHS App.
      </p>
      <p>
        You cannot use this app if you do not have a ycdsbk12.ca GAFE account.
      </p>
      <h3 class="text-2xl md:text-3xl font-semibold">
        What information is being stored, or accessed?
      </h3>
      <p>
        Your name, YCDSBK12 email, and additional data (song requests) is stored
        securely within our database. Except within this policy, your
        information is not shared with any other third parties.
      </p>
      <h3 class="text-2xl md:text-3xl font-semibold">
        What is the relation between my personal data and my rights using this
        app?
      </h3>
      <p>
        By using the St. Augustine CHS app, you are entitled to the following
        rights:
      </p>
      <ul class="list-disc list-inside">
        <li>
          The right to deactivate your account. You can request to delete your
          account by contacting us at: stauchsappdev@gmail.com.
        </li>
        <li>
          The right to submit a complaint. If you have any concerns regarding
          the way your Personal Data is being stored within the app, please
          contact us at stauchsappdev@gmail.com. After submitting a complaint, we
          will confirm the reception of your complaint within (3) business days.
          We will investigate your complaint and issue a response within (2)
          weeks.
        </li>
      </ul>
      <h3 class="text-2xl md:text-3xl font-semibold">
        Is my Personal Data secure?
      </h3>
      <p>
        Data security is a priority at all times. A Tier 1 cloud provider is
        used to run our operations (Google Firebase).
      </p>
      <h3 class="text-2xl md:text-3xl font-semibold">
        What happens to my data when I delete my account?
      </h3>
      <p>
        Upon the deletion of your account, all of your Personal Data will be
        removed from our database. To request to delete your account, you can
        email stauchsappdev@gmail.com.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'PrivacyPolicy',
});
</script>

<style scoped>
.paragraphs > * {
  margin-top: 1rem;
}
</style>
