import { Container } from '@mantine/core';
// import { Welcome } from '../components/Welcome/Welcome';
// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { DateComparer } from '../components/DateComparer/DateComparer';

export default function HomePage() {
  return (
    <>
      <Container size="md">
        <DateComparer />
      </Container>
      {/*
      <Welcome />
      <ColorSchemeToggle />
      */}
    </>
  );
}
