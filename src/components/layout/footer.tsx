import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Weather Station. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
            <a href="mailto:support@weatherstation.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              support@weatherstation.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
