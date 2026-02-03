import { cn } from '@/lib/utils';

const H2 = ({ className, ...props }: React.ComponentProps<'h2'>) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}>
      {props.children}
    </h2>
  );
};

export default H2;
