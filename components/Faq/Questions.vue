<template>
  <div class="px-4 md:px-16 lg:px-20 py-16">
    <h1 class="text-4xl font-bold text-center">
      Frequently <span class="text-primary">Asked</span> Questions
    </h1>
    <div class="flex justify-center">
      <hr class="border-b-4 border-solid w-8/12 my-12 border-gray-500" />
    </div>
    <FaqQuestion
      v-for="(question, index) in questions"
      :key="`question-${index}`"
      class="mb-4"
      :question="question"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FaqQuestions',
  data() {
    return {
      questions: [
        {
          isOpen: true,
          question: 'Lorem ipsum dolor sit amet?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget. Ullamcorper sit amet risus nullam. Viverra justo nec ultrices dui sapien eget mi proin. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Morbi tincidunt ornare massa eget egestas. Nisl condimentum id venenatis a condimentum vitae. Pretium nibh ipsum consequat nisl. Cursus mattis molestie a iaculis at erat. Lectus magna fringilla urna porttitor rhoncus dolor. Posuere morbi leo urna molestie at elementum eu facilisis sed. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Vitae suscipit tellus mauris a diam. Consectetur adipiscing elit ut aliquam purus sit amet.\nSollicitudin tempor id eu nisl. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Vivamus arcu felis bibendum ut tristique et egestas. Etiam sit amet nisl purus in mollis. Aliquet bibendum enim facilisis gravida neque convallis a cras. Fermentum et sollicitudin ac orci phasellus. Odio aenean sed adipiscing diam donec. Bibendum ut tristique et egestas quis ipsum. Sed cras ornare arcu dui vivamus arcu felis. Porttitor lacus luctus accumsan tortor posuere ac ut.',
        },
        {
          isOpen: false,
          question: 'Lorem ipsum dolor sit amet?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget. Ullamcorper sit amet risus nullam. Viverra justo nec ultrices dui sapien eget mi proin. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Morbi tincidunt ornare massa eget egestas. Nisl condimentum id venenatis a condimentum vitae. Pretium nibh ipsum consequat nisl. Cursus mattis molestie a iaculis at erat. Lectus magna fringilla urna porttitor rhoncus dolor. Posuere morbi leo urna molestie at elementum eu facilisis sed. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Vitae suscipit tellus mauris a diam. Consectetur adipiscing elit ut aliquam purus sit amet.\nSollicitudin tempor id eu nisl. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Vivamus arcu felis bibendum ut tristique et egestas. Etiam sit amet nisl purus in mollis. Aliquet bibendum enim facilisis gravida neque convallis a cras. Fermentum et sollicitudin ac orci phasellus. Odio aenean sed adipiscing diam donec. Bibendum ut tristique et egestas quis ipsum. Sed cras ornare arcu dui vivamus arcu felis. Porttitor lacus luctus accumsan tortor posuere ac ut.',
        },
        {
          isOpen: false,
          question: 'Lorem ipsum dolor sit amet?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget. Ullamcorper sit amet risus nullam. Viverra justo nec ultrices dui sapien eget mi proin. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Morbi tincidunt ornare massa eget egestas. Nisl condimentum id venenatis a condimentum vitae. Pretium nibh ipsum consequat nisl. Cursus mattis molestie a iaculis at erat. Lectus magna fringilla urna porttitor rhoncus dolor. Posuere morbi leo urna molestie at elementum eu facilisis sed. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Vitae suscipit tellus mauris a diam. Consectetur adipiscing elit ut aliquam purus sit amet.\nSollicitudin tempor id eu nisl. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Vivamus arcu felis bibendum ut tristique et egestas. Etiam sit amet nisl purus in mollis. Aliquet bibendum enim facilisis gravida neque convallis a cras. Fermentum et sollicitudin ac orci phasellus. Odio aenean sed adipiscing diam donec. Bibendum ut tristique et egestas quis ipsum. Sed cras ornare arcu dui vivamus arcu felis. Porttitor lacus luctus accumsan tortor posuere ac ut.',
        },
        {
          isOpen: false,
          question: 'Lorem ipsum dolor sit amet?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget. Ullamcorper sit amet risus nullam. Viverra justo nec ultrices dui sapien eget mi proin. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Morbi tincidunt ornare massa eget egestas. Nisl condimentum id venenatis a condimentum vitae. Pretium nibh ipsum consequat nisl. Cursus mattis molestie a iaculis at erat. Lectus magna fringilla urna porttitor rhoncus dolor. Posuere morbi leo urna molestie at elementum eu facilisis sed. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Vitae suscipit tellus mauris a diam. Consectetur adipiscing elit ut aliquam purus sit amet.\nSollicitudin tempor id eu nisl. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Vivamus arcu felis bibendum ut tristique et egestas. Etiam sit amet nisl purus in mollis. Aliquet bibendum enim facilisis gravida neque convallis a cras. Fermentum et sollicitudin ac orci phasellus. Odio aenean sed adipiscing diam donec. Bibendum ut tristique et egestas quis ipsum. Sed cras ornare arcu dui vivamus arcu felis. Porttitor lacus luctus accumsan tortor posuere ac ut.',
        },
        {
          isOpen: false,
          question: 'Lorem ipsum dolor sit amet?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget. Ullamcorper sit amet risus nullam. Viverra justo nec ultrices dui sapien eget mi proin. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Morbi tincidunt ornare massa eget egestas. Nisl condimentum id venenatis a condimentum vitae. Pretium nibh ipsum consequat nisl. Cursus mattis molestie a iaculis at erat. Lectus magna fringilla urna porttitor rhoncus dolor. Posuere morbi leo urna molestie at elementum eu facilisis sed. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Vitae suscipit tellus mauris a diam. Consectetur adipiscing elit ut aliquam purus sit amet.\nSollicitudin tempor id eu nisl. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Vivamus arcu felis bibendum ut tristique et egestas. Etiam sit amet nisl purus in mollis. Aliquet bibendum enim facilisis gravida neque convallis a cras. Fermentum et sollicitudin ac orci phasellus. Odio aenean sed adipiscing diam donec. Bibendum ut tristique et egestas quis ipsum. Sed cras ornare arcu dui vivamus arcu felis. Porttitor lacus luctus accumsan tortor posuere ac ut.',
        },
        {
          isOpen: false,
          question: 'Lorem ipsum dolor sit amet?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget. Ullamcorper sit amet risus nullam. Viverra justo nec ultrices dui sapien eget mi proin. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Morbi tincidunt ornare massa eget egestas. Nisl condimentum id venenatis a condimentum vitae. Pretium nibh ipsum consequat nisl. Cursus mattis molestie a iaculis at erat. Lectus magna fringilla urna porttitor rhoncus dolor. Posuere morbi leo urna molestie at elementum eu facilisis sed. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Vitae suscipit tellus mauris a diam. Consectetur adipiscing elit ut aliquam purus sit amet.\nSollicitudin tempor id eu nisl. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Vivamus arcu felis bibendum ut tristique et egestas. Etiam sit amet nisl purus in mollis. Aliquet bibendum enim facilisis gravida neque convallis a cras. Fermentum et sollicitudin ac orci phasellus. Odio aenean sed adipiscing diam donec. Bibendum ut tristique et egestas quis ipsum. Sed cras ornare arcu dui vivamus arcu felis. Porttitor lacus luctus accumsan tortor posuere ac ut.',
        },
      ],
    };
  },
});
</script>
