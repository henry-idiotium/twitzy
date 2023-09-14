function MainArea() {
  return <main>hello world!</main>;
}

function SideArea() {
  return <aside></aside>;
}

export default function Root() {
  return (
    <>
      <MainArea />
      <SideArea />
    </>
  );
}
