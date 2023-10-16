<template>
  <div class="mx-auto max-w-screen-xl lg:px-6 lg:py-16">
    <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
      <h1
        class="mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-1)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"
      >
        Aktuelt
      </h1>
    </div>
    <div class="grid gap-6 p-2 lg:grid-cols-2">
      <article
        class="rounded-lg border border-[color:var(--vp-c-brand-1)] p-6 dark:border-[color:var(--vp-c-brand-dark)] transition transform hover:shadow-lg"
      >
        <div class="flex flex-col h-full">
          <div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-1)] dark:text-[color:var(--vp-c-brand-dark)]">
              Økt Sikkerhetstiltak i Sameiet
            </h2>
          </div>
          <div class="mb-5">
            Sameiets styre har nylig implementert en rekke tiltak for å forbedre sikkerheten i sameiet. Dette inkluderer installasjon av nye
            overvåkingskameraer rundt området for å bidra til å forebygge uønskede hendelser. I tillegg har sameiet ansatt en ny vaktmester
            som vil ha faste tilsynsruter for å opprettholde tryggheten i sameiet. Dette er en del av vårt kontinuerlige engasjement for å
            gjøre sameiet til et enda bedre sted å bo.
          </div>
          <div class="mt-auto">
            <p class="">Oktober 15, 2023</p>
          </div>
        </div>
      </article>
      <article
        class="rounded-lg border border-[color:var(--vp-c-brand-1)] p-6 dark:border-[color:var(--vp-c-brand-dark)] transition transform hover:shadow-lg"
      >
        <div class="flex flex-col h-full">
          <div class="">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-1)] dark:text-[color:var(--vp-c-brand-dark)]">
              Sammen for et Grønnere Sameie
            </h2>
          </div>
          <div class="mb-5">
            Sameiet inviterer alle beboere til en fellessamling for å diskutere nye miljøinitiativ. I samarbeid med en lokal
            miljøorganisasjon planlegger vi å plante trær og blomster rundt sameiet, og vi trenger frivillige til å hjelpe til med
            prosjektet. Dette er en flott mulighet for alle beboere å bidra til et grønnere og mer bærekraftig sameie. Møtet vil også
            inkludere en presentasjon om hvordan vi kan spare energi og redusere avfallet i sameiet. Sammen kan vi gjøre en positiv
            forskjell for både sameiet og miljøet! Husk å tilpasse disse nyhetene til faktiske hendelser og initiativer i sameiet ditt, og
            legg til relevant informasjon før du publiserer dem på nettsiden.
          </div>
          <div class="mt-auto">
            <p class="">Oktober 14, 2023</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
};
</script>
