import { cn } from '@/lib/utils';

const H1 = ({ className, ...props }: React.ComponentProps<'h1'>) => {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
        className
      )}
      {...props}>
      {props.children}
    </h1>
  );
};

export default H1;
