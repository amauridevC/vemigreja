
import { Container } from "@/components/container"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CardGcEditar from "@/components/cards/cardGcEditar"
import { Search } from 'lucide-react';
import CardEditarEvento from "../cards/cardEditarEvento"

export default function EditarExcluirEvento(){
    return (
        <div>
        <div>
            <p className="font-bold text-2xl p-4">Editar/excluir GC </p>
        </div>

        <div className="border shadow p-4 rounded-lg">
            <form action="" className='flex space-x-3'>
                <Input placeholder="Pesquise pelo nome do evento..." />
                <Button type='submit' className='bg-[#FF6C00] hover:bg-[#25464E] cursor-pointer'><Search /></Button>
            </form>
            <div className="w-full sm:grid sm:grid-cols-2 p-8 gap-4">
                <CardEditarEvento
                    banner="/banner.png"
                    titulo="Teste"
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                      in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    data="20/03/2023"
                    hora="19:30"
                />
                <CardEditarEvento
                    banner="/banner.png"
                    titulo="Teste"
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                      in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    data="20/03/2023"
                    hora="19:30"
                />
            </div>
            <form action="" className="space-y-3">
                <Input placeholder="Nome do evento" name="nomeDoEvento"/>
                <Input placeholder="Descrição" name="descricaoDoEvento"/>
                <div className="w-full">
                <p className=" text-sm ml-3 text-muted-foreground">Data</p>
                <Input placeholder="" type="date" name="dataDoEvento"/>
                </div>
                <div className="w-full">
                <p className=" text-sm ml-3 text-muted-foreground">Hora</p>
                <Input  type="time" name="horaDoEvento"/>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-3 ">
                    <div >
                        <p className=" text-sm ml-3 text-muted-foreground">Banner</p>
                    <Input type="file" name="bannerDoEvento" />
                    </div>
                    <div className="w-full">
                    <p className="text-sm ml-3 text-muted-foreground">Salvar alterações</p>
                    <Button className="rounded-lg bg-[#FF6C00] w-full hover:bg-[#25464E]" type="submit">salvar</Button>
                    </div>
                    </div>
            </form>
        </div>
    </div>
    )
}