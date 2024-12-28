<template>
  <div class="blinking-line">
    <div class="blinking-line__inner">
      <div class="light-1">
        <div aria-hidden="true" class="light-1__line">
          <div aria-hidden="true" class="light-1__line_head head" />
        </div>
      </div>
      <div class="light-2">
        <div aria-hidden="true" class="light-2__line">
          <div aria-hidden="true" class="light-2__line_head head" />
        </div>
      </div>
      <div class="light-3">
        <div aria-hidden="true" class="light-3__line">
          <div aria-hidden="true" class="light-3__line_head head" />
        </div>
      </div>
      <div class="light-4">
        <div aria-hidden="true" class="light-4__line">
          <div aria-hidden="true" class="light-4__line_head head" />
        </div>
      </div>
      <div class="light-5">
        <div aria-hidden="true" class="light-5__line">
          <div aria-hidden="true" class="light-5__line_head head" />
        </div>
      </div>
      <div class="light-6">
        <div aria-hidden="true" class="light-6__line">
          <div aria-hidden="true" class="light-6__line_head head" />
        </div>
      </div>
      <div class="light-7">
        <div aria-hidden="true" class="light-7__line">
          <div aria-hidden="true" class="light-7__line_head head" />
        </div>
      </div>
      <div class="light-8">
        <div aria-hidden="true" class="light-8__line">
          <div aria-hidden="true" class="light-8__line_head head" />
        </div>
      </div>
      <div class="light-9">
        <div aria-hidden="true" class="light-9__line">
          <div aria-hidden="true" class="light-9__line_head head" />
        </div>
      </div>
      <div class="light-10">
        <div aria-hidden="true" class="light-10__line">
          <div aria-hidden="true" class="light-10__line_head head" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blinking-line {
  @apply absolute inset-0 -z-1 isolate;

  &__inner {
    @apply absolute top-0 bottom-0 left-0 right-0 z-0 h-screen;
  }
}

@for $i from 1 through 10 {
  .light-#{$i} {
    &__line {
      @apply absolute opacity-50 bg-gradient-to-l to-transparent
        from-opacity-40 transform h-1 md:h-2;

      &_head {
        aspect-ratio: 1;
        @apply left-full h-full top-0 relative rounded-full;
      }
    }
  }
}

/* individual */
.light-1__line {
  @apply top-20 -left-80 bg-gradient-to-l w-[40rem] from-brand-tertiary;

  &_head {
    @apply bg-brand-tertiary;
  }
}
.light-2__line {
  @apply left-12 transform rotate-90 w-[40rem] from-brand-alt-1;

  &_head {
    @apply bg-brand-alt-1;
  }
}
.light-3__line {
  @apply -top-10 right-24 md:top-1/2 md:right-0 md:left-52 -rotate-90
    w-[30rem] from-brand-alt-2;

  &_head {
    @apply bg-brand-alt-2;
  }
}
.light-4__line {
  @apply right-20 md:right-0 md:top-2/3 md:-left-64 from-brand-accent
    w-[72rem];

  &_head {
    @apply bg-brand-accent;
  }
}
.light-5__line {
  @apply top-[-22.5em] -right-48 md:right-0 md:left-1/3
    md:top-1/3 rotate-90 from-brand-yellowish h-1 md:h-2 w-[42rem];

  &_head {
    @apply bg-brand-yellowish;
  }
}
.light-6__line {
  @apply left-24 -top-8 md:left-[45%] md:right-0 md:top-96 -rotate-90
    from-brand-greenish w-[30rem];

  &_head {
    @apply bg-brand-greenish;
  }
}
.light-7__line {
  @apply top-64 left-[55%] rotate-180 h-1 md:h-2 w-[30rem]
    from-brand-alt-1;

  &_head {
    @apply bg-brand-alt-1;
  }
}
.light-8__line {
  @apply top-32 left-[70%] rotate-180 h-1 md:h-2 w-[30rem]
    from-brand-alt-2;
}
.light-9__line {
  @apply top-64 left-[65%] transform rotate-90 h-1 md:h-2 w-[30rem]
    from-brand-tertiary;

  &_head {
    @apply bg-brand-tertiary;
  }
}
.light-10__line {
  @apply top-10 left-96 transform rotate-90 h-1 md:h-2 w-[30rem]
  from-brand-violetish;

  &_head {
    @apply bg-brand-violetish;
  }
}
</style>
