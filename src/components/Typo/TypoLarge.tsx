import { cn } from '@/lib/utils';

const TypoLarge = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('text-lg font-semibold', className)} {...props}>
      {props.children}
    </div>
  );
};

export default TypoLarge;
