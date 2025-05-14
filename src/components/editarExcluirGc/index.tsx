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
import { Search } from 'lucide-react';

export default function EditarExcluirGc(){
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
            <div className="w-full sm:grid sm:grid-cols-4">
                <CardGcEditar
                   bannerUrl="/ana.jpg"
                   logoUrl="/hype college logo.png"
                   gc="GC dos atraidos"
                   genero="Masculino"
                   ministerio="Hypeland"
                   lider="Kaio Jabs"
                />
                <CardGcEditar
                   bannerUrl="/ana.jpg"
                   logoUrl="/hype college logo.png"
                   gc="GC dos atraidos"
                   genero="Masculino"
                   ministerio="Hypeland"
                   lider="Kaio Jabs"
                />
                <CardGcEditar
                   bannerUrl="/ana.jpg"
                   logoUrl="/hype college logo.png"
                   gc="GC dos atraidos"
                   genero="Masculino"
                   ministerio="Hypeland"
                   lider="Kaio Jabs"
                />
                <CardGcEditar
                   bannerUrl="/ana.jpg"
                   logoUrl="/hype college logo.png"
                   gc="GC dos atraidos"
                   genero="Masculino"
                   ministerio="Hypeland"
                   lider="Kaio Jabs"
                />
            </div>
            <form action="" className="space-y-3">
                <Input placeholder="Nome do gc" name="nome"/>
                <Select>
                    <SelectTrigger className="w-full rounded-lg">
                        <SelectValue placeholder="Genero" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Selecione uma opção</SelectLabel>
                        <SelectItem value="apple">Masculino</SelectItem>
                        <SelectItem value="banana">Feminino</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-full rounded-lg">
                        <SelectValue placeholder="Ministerio" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Selecione o Ministerio</SelectLabel>
                        <SelectItem value="apple">START</SelectItem>
                        <SelectItem value="teste">HYPE</SelectItem>
                        <SelectItem value="teste2">INSPIRE</SelectItem>
                        <SelectItem value="teste4">NOS</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input placeholder="Lider"/>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
                <div className="w-full">
                    <p className=" text-sm ml-3 text-muted-foreground">Banner</p>
                <Input type="file" />
                </div>
                <div className="w-full">
                <p className=" text-sm ml-3 text-muted-foreground">Placa do gc</p>
                <Input type="file" />
                </div>
                <div className="w-full">
                <p className="text-sm ml-3 text-muted-foreground">salvar alterações</p>
                <Button className="rounded-lg bg-[#FF6C00] w-full hover:bg-[#25464E] cursor-pointer" type="submit">Salvar</Button>
                </div>
                </div>
            </form>
        </div>
    </div>
    )
}