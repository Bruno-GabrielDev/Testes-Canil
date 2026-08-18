import { Link } from "react-router-dom";

function HomeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-[18px]"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m3.75 10.75 8.25-7 8.25 7v8.5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1v-8.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M9.25 20.25v-5.5h5.5v5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function Navbar() {
  return (
    <aside className="flex w-full shrink-0 flex-col bg-canil-muted px-5 py-5 md:min-h-screen md:w-60">
      <div className="flex items-center gap-3 px-1">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-canil-primary text-lg font-bold text-white">
          C
        </div>

        <div className="min-w-0 leading-none">
          <p className="font-serif text-[17px] font-bold tracking-[-0.02em] text-[#173536]">
            Canil São Carlos
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.04em] text-[#66888a]">
            SMMABEA · São Carlos
          </p>
        </div>
      </div>

      <nav aria-label="Navegação principal" className="mt-8">
        <Link
          aria-current="page"
          className="flex items-center gap-3 rounded-xl bg-white/55 px-3 py-2.5 text-sm font-semibold text-[#173536] transition-colors hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canil-primary"
          to="/"
        >
          <HomeIcon />
          <span>Início</span>
        </Link>
      </nav>
    </aside>
  );
}
