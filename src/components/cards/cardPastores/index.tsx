import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface CardProps {
    pastores: string;
    description: string;
    imageUrl: string;
}

  export default function CardPastores({
    pastores,
    description,
    imageUrl,
  }: CardProps) 
 {
    return (
        <div className="">
            <Card className="h-40 item-center justify-center  ">
                <CardHeader className="flex flex-row items-center md:mx-10 ">
                  <div> 
                <Avatar className=" flex justify-start mr-10  md:mr-40">
                  <AvatarImage src={imageUrl} className=" h-30 w-30 rounded-full"/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </div> 
                    <div className="w-40 ">
                    <CardTitle className="text-center mt-5">{pastores}</CardTitle>
                    <Separator className="mt-3"/>
                    <CardDescription className=" p-6 text-center">{description}</CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
  }