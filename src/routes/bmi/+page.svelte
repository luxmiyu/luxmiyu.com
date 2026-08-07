<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Grid,
    Input,
    Output,
    Columns,
    Center,
    Text,
  } from '$lib/components'

  const bmi = (kg: number, m: number) => kg / (m * m)
  const kg = (bmi: number, m: number) => bmi * m * m
  const m = (bmi: number, kg: number) => Math.sqrt(kg / bmi)

  const minM = 1.2
  const maxM = 2.3
  const minKG = 30
  const maxKG = 250

  interface WeightClass {
    name: string
    bmi: number
    color: string
  }

  const weightClasses: WeightClass[] = [
    { name: 'Underweight', bmi: 0, color: '#bc2020' },
    { name: 'Moderately Underweight', bmi: 16, color: '#d38888' },
    { name: 'Slightly Underweight', bmi: 17, color: '#ffe400' },
    { name: 'Healthy Weight', bmi: 18.5, color: '#008137' },
    { name: 'Overweight', bmi: 25, color: '#ffe400' },
    { name: 'Obesity', bmi: 30, color: '#d38888' },
    { name: 'Severe Obesity', bmi: 35, color: '#bc2020' },
    { name: 'Morbid Obesity', bmi: 40, color: '#8a0101' },
  ]

  let userM = $state(1.8)
  let userKG = $state(80)
  let userBMI = $derived(bmi(userKG, userM))

  function bmiClass(bmi: number): string {
    if (bmi < 0 || !Number.isFinite(bmi)) {
      return 'Unknown'
    }

    for (let i = weightClasses.length - 1; i >= 0; i--) {
      if (bmi >= weightClasses[i].bmi) {
        return weightClasses[i].name
      }
    }

    return weightClasses[0].name
  }
</script>

<Head title="luxmiyu → bmi" description="a simple bmi calculator" image="/preview/bmi.jpg" />

<Container fill>
  <Header title="bmi" description="a simple bmi calculator" />

  <Text>
    <Grid gap="12px">
      <Center>
        <Output
          value={userBMI.toFixed(1)}
          width="200px"
          height="100px"
          fontSize="50px"
          fontWeight="450"
          center
        />
      </Center>

      <p class="subtitle center">{bmiClass(userBMI)}</p>

      <Grid gap="4px">
        <Columns template="100px 1fr">
          <Center><p class="subtitle">Height: {userM} m</p></Center>
          <div class="range">
            <Input.Range bind:value={userM} min={1.2} max={2.3} step={0.01} width="100%" />
          </div>
        </Columns>
        <Columns template="100px 1fr">
          <Center><p class="subtitle">Weight: {userKG} Kg</p></Center>
          <div class="range">
            <Input.Range bind:value={userKG} min={30} max={250} step={1} width="100%" />
          </div>
        </Columns>
      </Grid>
    </Grid>
  </Text>

  <Footer />
</Container>

<style lang="sass">
  .range
    background: transparent
    padding-top: 2px
</style>
