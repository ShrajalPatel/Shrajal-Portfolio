/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownRight } from "lucide-react"; 
import { Button } from "@/components/ui/button";
  
export function HeroSection04() {
  return (
    <section className="min-h-screen overflow-hidden relative py-20">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        <div className="relative ">
          <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider">
            2004
          </p>
          <h1
            className={`z-20 text-primary relative font-bold text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]`}
          >
            DEVELOPER | EDITOR
          </h1>
          <p className="text-4xl hidden xl:block absolute -bottom-12 right-240 font-thin tracking-[6px]">
            SHRAJAL
          </p>
          <p className="text-4xl absolute xl:hidden -bottom-12 left-24 font-thin tracking-[6px]">
            SHRAJAL
          </p>
        </div>

        <div className="grid relative">
          <div className="space-y-8 pt-20 flex gap-6 justify-center">
            <div className="flex gap-6 bg-secondary w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
              <div className="font-semibold text-xl">
                <div>/ WEB DEVELOPMENT</div>
                <div>/ APP DEVELOPMENT</div>
                <div>/ VIDEO EDITING</div>
              </div>
              <div className="absolute hidden  md:flex left-1/2 -top-10 w-fit overflow-hidden bg-secondary">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/profile-1763622027410.jpg?width=400&height=400&resize=contain"
                  alt="Shrajal portrait"
                  className="h-100 w-full object-contain grayscale"
                />
                <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
                  WEB DEVELOPER & EDITOR
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-secondary">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/profile-1763622027410.jpg?width=400&height=400&resize=contain"
              alt="Shrajal portrait"
              className="h-100 w-full object-contain grayscale"
            />
            <div className="text-left p-2 rotate-180 [writing-mode:vertical-rl] text-xs font-medium tracking-widest">
              WEB DEVELOPER & EDITOR
            </div>
          </div>
        </div>

        <div className="md:mt-40 mt-10">
          <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
            I'M AN EXPERIENCED DEVELOPER AND EDITOR,
            <br />
            WHO CREATES MEMORABLE DIGITAL EXPERIENCES FOR
            <br />
            BRANDS AND PROJECTS OF ALL SIZES
          </p>
        </div>
        <div className="flex justify-center pt-6">
          <Button size={"lg"}>Book a call</Button>
        </div>

        <div className="md:flex mt-20 items-end justify-between">
          <div className="relative">
            <div className="w-60 h-36 shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                alt="Portfolio Project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-60 h-36 absolute left-6 -top-6  shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
                alt="Portfolio Project 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-60 h-36 absolute left-12 -top-12  shadow-lg border rounded-md overflow-hidden mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
                alt="Portfolio Project 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center md:justify-end gap-2">
              <span className="text-lg font-medium tracking-wider">
                RECENT WORK
              </span>
              <ArrowDownRight className="size-6" />
            </div>

            <div className="mt-3 md:text-right">
              <h2
                className={`text-5xl uppercase tracking-[-4px]`}
              >
                Design without Limits
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute block dark:hidden inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      <div
        className="absolute hidden dark:block inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </section>
  );
}
