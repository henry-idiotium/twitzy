import { Button } from '@/components/ui';

function MainArea() {
  return <main>hello world!</main>;
}

function SideArea() {
  return <aside></aside>;
}
export default function RootPage() {
  return (
    <>
      <Button>fooo</Button>
      <MainArea />
      <SideArea />
    </>
  );
}
