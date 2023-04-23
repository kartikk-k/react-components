import React from 'react';
import { clsx } from 'clsx';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level: '1' | '2' | '3' | '4' | '5' | '6';
    size?: 'sm' | 'md' | 'lg';
}

const Heading: React.FC<HeadingProps> = ({ level, className, size = 'md', children }) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    const headingClasses = clsx(
        'font-bold',
        size === 'sm' ? 'text-lg sm:text-xl' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl',
        'text-gray-900',
        'mt-4 mb-2',
        className
    );

    return <HeadingTag className={headingClasses}>{children}</HeadingTag>;
};

export default Heading;
