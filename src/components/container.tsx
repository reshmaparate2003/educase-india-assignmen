import { cn } from '../lib/utils';

const Container = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'px-5 py-10 border border-neutral-200 min-h-screen w-full max-w-[375px] mx-auto bg-background',
        className,
      )}
      {...props}
    />
  );
};
Container.displayName = 'Container';

export { Container };
