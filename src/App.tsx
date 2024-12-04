import { EpicStackLogo, logos } from "./assets/logos/logos";
import { cn } from "./lib/utils";

//! dynamic naming of classes {`xl:col-start-${i}`} doesn't work in tailwind so we need to create a map for the dynamic classes and use cn to merge them with the static classes
const columnClasses: Record<(typeof logos)[number]["column"], string> = {
  1: "xl:col-start-1",
  2: "xl:col-start-2",
  3: "xl:col-start-3",
  4: "xl:col-start-4",
  5: "xl:col-start-5",
};

const rowClasses: Record<(typeof logos)[number]["row"], string> = {
  1: "xl:row-start-1",
  2: "xl:row-start-2",
  3: "xl:row-start-3",
  4: "xl:row-start-4",
  5: "xl:row-start-5",
  6: "xl:row-start-6",
};

function App() {
  return (
    <main className="grid min-h-dvh max-w-dvw place-items-center overflow-x-hidden bg-transparent px-4 py-16">
      <div className="grid place-items-center gap-12 sm:gap-16 xl:grid-cols-[auto_1fr] xl:gap-24">
        <div className="flex w-full max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left">
          <EpicStackLogo className="size-20" />

          <h1 className="sm:text-4.5xl lg:text-5.5xl mt-6 text-4xl font-medium text-black md:mt-8 md:text-5xl">
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg md:mt-6 md:text-xl">
            Check the{" "}
            <a href="#" className="text-black underline underline-offset-2">
              getting started
            </a>{" "}
            guide file for how to get your project off the ground!
          </p>
        </div>

        <ul className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 sm:gap-4 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6">
          {logos.map(({ src, alt, href, column, row }) => (
            <li
              key={href}
              className={cn(
                "bg-highlight/7 shadow-highlight/50 size-20 overflow-hidden rounded-2xl shadow-md sm:size-24",
                columnClasses[column],
                rowClasses[row],
              )}
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
