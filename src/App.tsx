import { EpicStackLogo, logos } from "./assets/logos/logos";

function App() {
  return (
    <main className="grid min-h-dvh max-w-dvw place-items-center overflow-x-hidden bg-transparent px-4 py-16">
      <div className="grid gap-12">
        <div className="flex w-full max-w-md flex-col items-center text-center">
          <EpicStackLogo className="size-20" />

          <h1 className="mt-6 text-4xl font-medium text-black">
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Check the{" "}
            <a href="#" className="text-black underline underline-offset-2">
              getting started
            </a>{" "}
            guide file for how to get your project off the ground!
          </p>
        </div>

        <ul className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-2">
          {logos.map(({ src, alt, href }) => (
            <li
              key={href}
              className="bg-highlight/7 shadow-highlight/50 size-20 overflow-hidden rounded-2xl border shadow-md"
            >
              <a
                href={href}
                className="grid h-full w-full place-items-center p-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={src} alt={alt} className="w-full object-cover" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
