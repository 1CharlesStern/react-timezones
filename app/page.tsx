import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { DateComparer } from '../components/DateComparer/DateComparer';

export default function HomePage() {
  return (
    <>
      <DateComparer />
      {/*
      <Welcome />
      <ColorSchemeToggle />
      */}
    </>
  );
}
