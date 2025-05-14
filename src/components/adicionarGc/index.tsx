import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Container } from "@/components/container"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CardGcEditar from "@/components/cards/cardGcEditar"



export default function AdicionarGc(){
    return (
        <div>
            <div>
                <p className="font-bold text-2xl p-4">Adiconar um novo GC </p>
            </div>
            <div className="border shadow p-4 rounded-lg">
                <form action="" className="space-y-3">
                    <Input placeholder="Nome do gc" name="nome" required/>
                    <Select name="genero" required>
                        <SelectTrigger className="w-full rounded-lg">
                            <SelectValue placeholder="Genero" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Selecione uma opção</SelectLabel>
                            <SelectItem value="MASCULINO"  >Masculino</SelectItem>
                            <SelectItem value="FEMININO">Feminino</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select name="ministerio" required>
                        <SelectTrigger className="w-full rounded-lg">
                            <SelectValue placeholder="Ministerio" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Selecione o Ministerio</SelectLabel>
                            <SelectItem value="START">START</SelectItem>
                            <SelectItem value="HYPE">HYPE</SelectItem>
                            <SelectItem value="INSPIRE">INSPIRE</SelectItem>
                            <SelectItem value="NOS">NOS</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Input placeholder="Lider" name="nomeLider"/>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                    <div className="w-full">
                        <p className=" text-sm ml-3 text-muted-foreground">Banner</p>
                    <Input type="file" name="banner" required />
                    </div>
                    <div className="w-full">
                    <p className=" text-sm ml-3 text-muted-foreground">Placa do gc</p>
                    <Input type="file" name="placa" required />
                    </div>
                    <div className="w-full">
                    <p className="text-sm ml-3 text-muted-foreground">Adicionar novo gc</p>
                    <Button className="rounded-lg bg-[#FF6C00] w-full hover:bg-[#25464E]" type="submit">adicionar</Button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}