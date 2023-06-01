import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Does it need internet access?</AccordionTrigger>
        <AccordionContent>
          No. It does not need internet access, you only need to connect to the
          ADA WiFi network.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
