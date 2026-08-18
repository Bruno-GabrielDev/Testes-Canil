import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14">
      <p className="text-sm font-medium text-[#66888a]">Canil e Gatil</p>
      <h1 className="mt-2 font-serif text-3xl font-bold tracking-[-0.03em] text-[#173536]">
        Início
      </h1>

      <h2>Exemplo de uso de componente shadcn</h2>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button type="button">Cadastrar animal</Button>
        <Button type="button" variant="outline">
          Ver protocolos
        </Button>
      </div>
    </div>
  );
}
