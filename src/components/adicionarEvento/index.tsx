import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function AdicionarEvento(){
    return (
        <div>
            <div>
                <p className="font-bold text-2xl p-4">Adiconar um novo evento</p>
            </div>
            <div className="border shadow p-4 rounded-lg">
                <form action="" className="space-y-3">
                    <Input placeholder="Titulo" name="tituloDoEvento" type="text" required />
                    <Input placeholder="Descrição" name="descricaoDoEvento" type="text" required />
                    <Input placeholder="Data" type="date" name="dataDoEvento" required/>
                    <Input placeholder="Data" type="time" name="horaDoEvento" required/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-3">
                    <div className="w-full" >
                        <p className=" text-sm ml-3 text-muted-foreground">Banner</p>
                    <Input type="file" className="w-full" name="bannerDoEvento" required/>
                    </div>
                    <div className="w-full">
                        <p className="text-sm ml-3 text-muted-foreground">Adicionar novo evento</p>
                    <Button className="rounded-lg bg-[#FF6C00] w-full hover:bg-[#25464E]" type="submit">adicionar</Button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}