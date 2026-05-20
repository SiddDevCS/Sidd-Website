import Section from "@/app/components/ui/Section";
import Button from "@/app/components/ui/Button";

export default function NotFound() {
  return (
    <Section spacing="default" className="pt-32 min-h-[60vh] flex items-center">
      <div className="text-center w-full">
        <p className="text-mono-accent mb-4">404</p>
        <h1 className="text-headline text-gradient mb-4">Page not found</h1>
        <p className="text-neutral-500 mb-8 max-w-md mx-auto">
          The route you requested doesn&apos;t exist or was moved.
        </p>
        <Button href="/">Back to home</Button>
      </div>
    </Section>
  );
}
