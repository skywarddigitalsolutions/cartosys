"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

const images = [
  { src: "/omarbelloni2.png", alt: "Imagen 1" },
  { src: "/omarbelloni2.png", alt: "Imagen 2" },
  { src: "/omarbelloni2.png", alt: "Imagen 3" },
  { src: "/omarbelloni2.png", alt: "Imagen 4" },
  { src: "/omarbelloni2.png", alt: "Imagen 5" },
]

export function Carrousel() {
  return (
    <section className="py-16 bg-bordofondo" id="galeria">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center mb-16">
            <h2 className="text-base text-verde font-semibold tracking-wide uppercase">Nuestra galería </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blanco sm:text-4xl">
            Mapas que transforman territorios
            </p>
            <p className="mt-4 max-w-2xl text-xl text-blanco lg:mx-auto">Explora algunos de nuestros trabajos más destacados en cartografía, donde plasmamos soluciones precisas para distintas provincias.</p>
        </div>
        <div className="relative">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-burgundy-light">
                    <CardContent className="flex aspect-[3/2] items-center justify-center p-2">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 text-verde hover:text-bordo z-10" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 text-verde hover:text-bordo z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
