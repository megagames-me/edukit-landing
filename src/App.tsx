import { Navbar } from 'flowbite-react';

function App() {
  return (
    <div>
      <Navbar fluid rounded className="px-8 sm:px-8 md:p-4 border-b">
        <Navbar.Brand href="#">
          <img alt="Edukit Logo" className="mr-3 h-6" src="/logo__edukit.svg" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span> */}
        </Navbar.Brand>
        <div className="flex md:order-2 md:hidden">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#about">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <header
        className="md:pb-24 md:pt-16 md:px-24 p-8 gap-1 lg:gap-3 flex flex-col justify-start"
        id="about"
      >
        <h1 className="mb-4 text-5xl lg:text-7xl font-extrabold leading-none tracking-tight w-full lg:w-4/5">
          Edukit improves the tutor and tutee experience through quality tools.
        </h1>
        <p className="text-lg lg:text-xl font-normal w-full md:w-4/5 lg:w-2/5">
          We build tools designed to supplement your existing workflows, such as
          matching tutors to tutees.
        </p>
      </header>
      <article className="md:p-24 p-8 py-16 bg-yellow-300 flex flex-col justify-start gap-1 lg:gap-3">
        <h2 className="mb-4 text-5xl lg:text-6xl font-bold leading-none tracking-tight w-full sm:w-2/5">
          Get started quickly
        </h2>
        <p className="text-lg lg:text-xl font-normal w-full md:w-4/5 lg:w-2/5">
          Our matching tool automatically matches tutors to tutees based on
          common parameters such as subjects, education level and gender.
        </p>
        <a
          href="https://learny-matching-tool-bls3q865g-antoponselvan.vercel.app/"
          className="hover:underline hover:cursor-pointer text-lg font-semibold leading-7 tracking-tight"
        >
          Try it out →
        </a>
      </article>
      <section className="md:p-24 p-8 grid md:grid-cols-3 grid-cols-1 md:gap-14 gap-8">
        <article className="flex flex-col justify-start gap-3">
          <img src="/illustration__wrench.png" className="w-20 h-20"></img>
          <h3 className="text-3xl font-normal">Adopt anywhere</h3>
          <p className="text-lg">
            No complex installation required. Simply plug and play.
          </p>
        </article>
        <article className="flex flex-col justify-start gap-3">
          <img src="/illustration__shield.png" className="w-20 h-20"></img>
          <h3 className="text-3xl font-normal">Privacy focused</h3>
          <p className="text-lg">
            We don’t collect or store any of your data as all information is
            processed on your device.
          </p>
        </article>
        <article className="flex flex-col justify-start gap-3">
          <img src="/illustration__clock.png" className="w-20 h-20"></img>
          <h3 className="text-3xl font-normal">Adopt anywhere</h3>
          <p className="text-lg">
            Our solution does the matching so you don’t have to.
          </p>
        </article>
      </section>
      <footer className="md:py-16 md:px-24 py-8 px-12 flex flex-col gap-4 bg-slate-50">
        <hr className="h-px bg-gray-400 border-0 dark:bg-gray-500" />
        <p className="text-lg font-normal">
          A{' '}
          <img
            className="w-[70.29px] h-[18px] inline"
            src="/logo__better.png"
            alt="better.sg"
          />{' '}
          initiative
        </p>
      </footer>
    </div>
  );
}

export default App;
