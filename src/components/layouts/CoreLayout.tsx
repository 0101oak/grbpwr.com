import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import Button from "@/components/ui/Button";
import { ButtonStyle } from "@/components/ui/Button/styles";
import CartPopup from "@/components/cart/CartPopup";
import Link from "next/link";
import { Suspense } from "react";
import CartProductsList from "../cart/CartProductsList";

export default function CoreLayout({
  children,
  hideForm,
}: Readonly<{
  children: React.ReactNode;
  hideForm?: boolean;
}>) {
  return (
    <div className="min-h-screen bg-bgColor">
      <div className="relative mx-auto max-w-7xl">
        <Header />
        <div className="flex">
          <div className="relative hidden w-24 md:block">
            <nav className="sticky top-24 flex flex-col items-center gap-60">
              <Button style={ButtonStyle.underlinedButton}>
                <Link href="/catalog">catalog</Link>
              </Button>
              <Button style={ButtonStyle.underlinedButton}>
                <Link href="/archive">archive</Link>
              </Button>
              <Button style={ButtonStyle.underlinedButton}>
                <Link href="/shipping">shipping</Link>
              </Button>
            </nav>
          </div>

          <div className="w-full space-y-20 px-2 md:px-0 lg:w-[calc(100%-192px)]">
            {children}
          </div>

          <div className="relative hidden w-24 md:block">
            <nav className="sticky top-24 flex flex-col items-center gap-60">
              <CartPopup>
                <Suspense fallback={null}>
                  <CartProductsList />
                </Suspense>
              </CartPopup>
              <Button style={ButtonStyle.underlinedButton}>
                <Link href="/about">about</Link>
              </Button>
              <Button style={ButtonStyle.underlinedButton}>
                <Link href="/contacts">contacts</Link>
              </Button>
            </nav>
          </div>
        </div>
        <Footer className="mt-24" hideForm={hideForm} />
      </div>
    </div>
  );
}
