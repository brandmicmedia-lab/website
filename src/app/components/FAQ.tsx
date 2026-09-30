import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { HelpCircle } from 'lucide-react';
import { SEO_CONFIG } from '../config/seo';

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-900/30 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-[#fe6d12]" />
            <span className="text-sm font-semibold text-[#fe6d12] tracking-wide uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-gray-400">
            Learn more about our creative process, deliverables, and how we help ambitious brands grow.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {SEO_CONFIG.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-gray-800 rounded-xl px-5 bg-gray-900/60 data-[state=open]:border-[#fe6d12]/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#fe6d12] transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base leading-relaxed pt-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
