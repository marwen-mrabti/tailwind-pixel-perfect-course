import { Fragment } from "react/jsx-runtime";
import { EpicStackLogo, logos } from "./assets/logos/logos";

function App() {
  return (
    <Fragment>
      {/*  *👀 */}
      <main className="bg-highlight-7 min-h-dvh max-w-dvw space-y-4 px-4 py-2">
        <EpicStackLogo className="size-20" />
        <h1 className="text-4xl">
          The <span className="text-highlight">Epic</span> Stack
        </h1>
        <p className="text-base text-slate-600">
          Check the{" "}
          <a href="#" className="text-black underline">
            getting started
          </a>{" "}
          guide file for how to get your project off the ground!
        </p>
        <ul className="grid grid-cols-3 place-items-center gap-4">
          {logos.map(({ src, alt, href }) => (
            <li
              key={href}
              className="aspect-square w-16 overflow-hidden rounded-lg border-1 p-2"
            >
              <a
                href={href}
                className="flex h-full w-full items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={src} alt={alt} className="w-full object-cover" />
              </a>
            </li>
          ))}
        </ul>
      </main>
    </Fragment>
  );
}

export default App;
