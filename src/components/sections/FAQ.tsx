"use client";

import { SectionShell } from "@/components/layout/SectionShell";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/seo/faq";

export default function FAQ() {
  return (
    <SectionShell
      id="faq"
      title="FAQ"
      subtitle="Quick answers about G.T. Fahad — for visitors, recruiters, and search engines."
    >
      <ScrollReveal className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-heading text-base hover:text-primary md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </SectionShell>
  );
}
