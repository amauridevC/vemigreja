import { Search } from 'lucide-react';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

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
import AdicionarGc from '@/components/adicionarGc';
import EditarExcluirGc from '@/components/editarExcluirGc';
import AdicionarEvento from '@/components/adicionarEvento';
import CardEditarEvento from '@/components/cards/cardEditarEvento';
import EditarExcluirEvento from '@/components/editarExcluirEvento';

export default function editar(){
    return (
        <Container>
            <Tabs defaultValue="gc" className="mt-20">
                  <TabsList className="grid w-full grid-cols-2 ">
                          <TabsTrigger value="gc" className="" >Adiconar GC</TabsTrigger>
                          <TabsTrigger value="gceditar">Editar/excluir GC</TabsTrigger>
                  </TabsList>
                  <TabsContent value="gc">
                           <AdicionarGc/>
                  </TabsContent>
                  <TabsContent value="gceditar">
                           <EditarExcluirGc/>
                  </TabsContent>
            </Tabs>
            

            <Tabs defaultValue="gc" className="mt-20 mb-10">
                  <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="gc" >Adicionar evento</TabsTrigger>
                          <TabsTrigger value="gceditar">Editar/excluir evento</TabsTrigger>
                  </TabsList>
                  <TabsContent value="gc">
                           <AdicionarEvento/>
                  </TabsContent>
                  <TabsContent value="gceditar">
                           <EditarExcluirEvento/>
                  </TabsContent>
            </Tabs>
        </Container>
    )
}