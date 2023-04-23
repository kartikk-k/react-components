import * as React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

const AccordionItemTrigger = ({ children, ...props }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <AccordionTrigger {...props} onOpenChange={() => setIsOpen((prev) => !prev)}>
            <div
                className={cn(
                    'flex justify-between items-center',
                    'border-b border-slate-200 dark:border-slate-700',
                    'px-4 py-3 cursor-pointer',
                    isOpen ? 'font-bold' : ''
                )}
            >
                <span>{children}</span>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
            </div>
        </AccordionTrigger>
    );
};

const AccordionItemContent = ({ children }) => {
    return (
        <AccordionContent className="px-4 py-2">
            <div className="text-gray-700 dark:text-gray-400">{children}</div>
        </AccordionContent>
    );
};

export interface AccordionItemProps {
    title: string;
    className?: string;
    children: React.ReactNode;
}

const AccordionItemComp = ({ title, className, children }: AccordionItemProps) => {
    return (
        <AccordionItem className={className}>
            <AccordionItemTrigger>{title}</AccordionItemTrigger>
            <AccordionItemContent>{children}</AccordionItemContent>
        </AccordionItem>
    );
};

const AccordionComp = ({ children }: { children: React.ReactNode }) => {
    return <Accordion>{children}</Accordion>;
};

export { AccordionComp as Accordion, AccordionItemComp as AccordionItem };
