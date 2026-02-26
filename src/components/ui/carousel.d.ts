import * as React from "react";
import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";

export type CarouselApi = EmblaCarouselType;

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  opts?: EmblaOptionsType;
  setApi?: (api: CarouselApi) => void;
  plugins?: EmblaPluginType[];
}

export interface CarouselContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CarouselArrowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
}

export const Carousel: React.ForwardRefExoticComponent<
  CarouselProps & React.RefAttributes<HTMLDivElement>
>;

export const CarouselContent: React.ForwardRefExoticComponent<
  CarouselContentProps & React.RefAttributes<HTMLDivElement>
>;

export const CarouselItem: React.ForwardRefExoticComponent<
  CarouselItemProps & React.RefAttributes<HTMLDivElement>
>;

export const CarouselPrevious: React.ForwardRefExoticComponent<
  CarouselArrowProps & React.RefAttributes<HTMLButtonElement>
>;

export const CarouselNext: React.ForwardRefExoticComponent<
  CarouselArrowProps & React.RefAttributes<HTMLButtonElement>
>;
