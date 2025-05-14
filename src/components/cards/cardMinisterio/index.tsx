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
import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    footerText: string;
}



export default function CardMinisterio(
    { title, description, imageUrl, footerText }: CardProps
) {
    return (
        <div>
          <Link href="/ministerios">
            <Card className="hover:bg-[#FFF1EC] duration-300 transform hover:scale-110 ">
                <CardHeader className=" flex justify-center flex-col items-center">
                <Avatar className=" flex justify-center ">
                  <AvatarImage src={imageUrl} className=" h-30 w-30 "/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                  <CardTitle>{title}</CardTitle>
                  <div className="w-40 ">
                  <CardDescription className=" text-center">{description}</CardDescription>
                  </div>
                  <CardContent className="">
                    <p>{footerText}</p>
                  </CardContent>
                </CardHeader>
              </Card>
              </Link>
        </div>
    )
}
