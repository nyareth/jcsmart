import {
  ArrowRight,
  Boxes,
  Camera,
  Clock,
  Gamepad2,
  Headphones,
  Laptop,
  Search,
  ShoppingBag,
  Smartphone,
  Star,
  Truck,
  Tv,
  Watch,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import United24Banner from "~/ui/components/banners/u24";
import { HeroBadge } from "~/ui/components/hero-badge";
import { ProductCard } from "~/ui/components/product-card";
import { TestimonialsSection } from "~/ui/components/testimonials/testimonials-with-marquee";
import { Button } from "~/ui/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/ui/primitives/card";

import { categories, featuredProductsHomepage, testimonials } from "./mocks";
import { CategoryItem } from "~/ui/components/custom/CategoryItem";
import { Input } from "~/ui/primitives/input";

const featuresWhyChooseUs = [
  {
    description:
      "Free shipping on all orders over $50. Fast and reliable delivery to your doorstep.",
    icon: <Truck className="h-6 w-6 text-primary" />,
    title: "Free Shipping",
  },
  {
    description:
      "Your payment information is always safe and secure with us. We use industry-leading encryption.",
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    title: "Secure Checkout",
  },
  {
    description:
      "Our customer support team is always available to help with any questions or concerns.",
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "24/7 Support",
  },
  {
    description:
      "We stand behind the quality of every product we sell. 30-day money-back guarantee.",
    icon: <Star className="h-6 w-6 text-primary" />,
    title: "Quality Guarantee",
  },
];

export default function HomePage() {
  return (
    <>
      <main
        className={`flex min-h-screen flex-col gap-y-16 bg-gradient-to-b from-muted/50 via-muted/25 to-background`}
      >
        <div className="min-h-screen font-sans">
          <United24Banner animateGradient={false} />
          {/* Container with max width for proportion */}
          <div className="max-w-7xl mx-auto px-4">
            {/* Search & Categories */}
            <div className="flex gap-6 py-6">
              {/* Categories */}
              <aside className="w-60 border dark:border-gray-800 rounded-lg p-4 hidden md:block">
                <h2 className="font-semibold mb-4">All Departments</h2>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Laptop className="w-4 h-4" /> Computer
                  </li>
                  <li className="flex items-center gap-2">
                    <Laptop className="w-4 h-4" /> Laptop
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" /> Smart Phone
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" /> Tablets
                  </li>
                  <li className="flex items-center gap-2">
                    <Camera className="w-4 h-4" /> Camera
                  </li>
                  <li className="flex items-center gap-2">
                    <Boxes className="w-4 h-4" /> Accessories
                  </li>
                  <li className="flex items-center gap-2">
                    <Headphones className="w-4 h-4" /> Headphones
                  </li>
                  <li className="flex items-center gap-2">
                    <Tv className="w-4 h-4" /> TV & Smart Box
                  </li>
                  <li className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4" /> Video Game
                  </li>
                  <li className="flex items-center gap-2">
                    <Watch className="w-4 h-4" /> Smart Watch
                  </li>
                  <li className="flex items-center gap-2">
                    <Boxes className="w-4 h-4" /> Others
                  </li>
                </ul>
              </aside>

              {/* Search + Featured */}
              <main className="flex-1">
                <div className="flex gap-2 mb-6">
                  <select
                    aria-label="categories"
                    className="border dark:border-gray-800 bg-transparent rounded-lg px-3 py-2 text-sm"
                  >
                    <option aria-label="Select">Select a Category</option>
                    <option aria-label="Computers">Computers</option>
                    <option aria-label="Phones">Phones</option>
                    <option aria-label="Accessories">Accessories</option>
                  </select>
                  <Input placeholder="What do you need..." className="flex-1" />
                  <Button aria-label="search button">
                    <Search className="w-4 h-4 mr-2" /> Search
                  </Button>
                </div>

                {/*  banner */}
                {/* Featured Section */}
                <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                  <Card className="col-span-2 relative h-[455px] overflow-hidden rounded-none">
                    <Image
                      src="/iphone.jpg"
                      alt="iPhone 13"
                      fill
                      className="object-cover"
                    />
                    <CardContent className="absolute inset-0 bg-black/60 flex flex-col justify-center p-8 text-white">
                      <p className="text-sm mb-2">FEATURED PRODUCT</p>
                      <h2 className="text-3xl font-bold font-serif">
                        iPhone 13
                      </h2>
                      <p className="mt-2">
                        Price only <span className="font-semibold">$1,099</span>
                      </p>
                      <Button className="mt-4 w-fit" aria-label="shop now">
                        Shop Now
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col gap-4 max-sm:hidden">
                    <Card className="relative h-full overflow-hidden rounded-none">
                      <Image
                        src="/watch.png"
                        alt="Smart Watch"
                        fill
                        className="object-cover"
                      />
                      <CardContent className="absolute inset-0 bg-black/60 flex flex-col justify-center p-4 text-white">
                        <h3 className="font-semibold font-serif">
                          Smart Watch
                        </h3>
                        <p className="text-sm">Starting from $399.99</p>
                        <Button size="sm" className="mt-2 w-fit">
                          Shop Now
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="relative overflow-hidden rounded-none h-full">
                      <Image
                        src="/headphones.jpg"
                        alt="Headphones"
                        fill
                        className="object-cover"
                      />
                      <CardContent className="absolute inset-0 bg-black/60 flex flex-col justify-center p-4 text-white">
                        <h3 className="font-semibold font-serif">Headphones</h3>
                        <p className="text-sm">Starting from $190.80</p>
                        <Button size="sm" className="mt-2 w-fit">
                          Shop Now
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </main>
            </div>

            {/* Categories Section */}
            <section className="py-8 grid grid-cols-2 md:grid-cols-6 gap-6">
              {[
                {
                  name: "Laptop",
                  img: "/laptop.png",
                },
                {
                  name: "Camera",
                  img: "/cctv.webp",
                },
                {
                  name: "Drones",
                  img: "/drone.png",
                },
                {
                  name: "Headphones",
                  img: "/headphones.png",
                },
                {
                  name: "Speaker",
                  img: "/speaker.png",
                },
              ].map((cat) => (
                <Card
                  key={cat.name}
                  className="flex flex-col items-center justify-center p-4 hover:shadow-lg transition rounded-2xl dark:border-gray-800"
                >
                  <Image src={cat.img} alt={cat.name} width={80} height={80} />
                  <p className="mt-2 text-sm font-medium font-serif">
                    {cat.name}
                  </p>
                </Card>
              ))}
            </section>
          </div>
        </div>

        {/* Featured Categories */}
        <section className={`py-12 md:py-16`}>
          <div className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
            <div className="mb-8 flex flex-col items-center text-center">
              <h2
                className={`font-display text-3xl leading-tight font-bold tracking-tight md:text-4xl`}
              >
                Shop by Category
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Find the perfect device for your needs from our curated
                collections
              </p>
            </div>
            <div className={`grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6`}>
              {categories.map((category) => (
                <CategoryItem name={category.name} key={category.id} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className={`bg-muted/50 py-12 md:py-16`}>
          <div className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
            <div className="mb-8 flex flex-col items-center text-center">
              <h2
                className={`font-display text-3xl leading-tight font-bold tracking-tight md:text-4xl`}
              >
                Featured Products
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Check out our latest and most popular tech items
              </p>
            </div>
            <div
              className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
            >
              {featuredProductsHomepage.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="/products">
                <Button className="group h-12 px-8" size="lg" variant="outline">
                  View All Products
                  <ArrowRight
                    className={`ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1`}
                  />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={`py-12 md:py-16`} id="features">
          <div className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
            <div className="mb-8 flex flex-col items-center text-center">
              <h2
                className={`font-display text-3xl leading-tight font-bold tracking-tight md:text-4xl`}
              >
                Why Choose Us
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p
                className={`mt-4 max-w-2xl text-center text-muted-foreground md:text-lg`}
              >
                We offer the best shopping experience with premium features
              </p>
            </div>
            <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-4`}>
              {featuresWhyChooseUs.map((feature) => (
                <Card
                  className={`rounded-2xl border-none bg-background shadow transition-all duration-300 hover:shadow-lg`}
                  key={feature.title}
                >
                  <CardHeader className="pb-2">
                    <div
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10`}
                    >
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={`bg-muted/50 py-12 md:py-16`}>
          <div className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
            <TestimonialsSection
              className="py-0"
              description="Don't just take our word for it - hear from our satisfied customers"
              testimonials={testimonials}
              title="What Our Customers Say"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-12 md:py-16`}>
          <div className={`container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
            <div
              className={`relative overflow-hidden rounded-xl bg-primary/10 p-8 shadow-lg md:p-12`}
            >
              <div
                className={`bg-grid-white/[0.05] absolute inset-0 bg-[length:16px_16px]`}
              />
              <div className="relative z-10 mx-auto max-w-2xl text-center">
                <h2
                  className={`font-display text-3xl leading-tight font-bold tracking-tight md:text-4xl`}
                >
                  Ready to Upgrade Your Tech?
                </h2>
                <p className={`mt-4 text-lg text-muted-foreground md:text-xl`}>
                  Join thousands of satisfied customers and experience the best
                  tech products on the market. Sign up today for exclusive deals
                  and offers.
                </p>
                <div
                  className={`mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row`}
                >
                  <Link href="/auth/sign-up">
                    <Button
                      className="h-12 px-8 transition-colors duration-200"
                      size="lg"
                    >
                      Sign Up Now
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button
                      className="h-12 px-8 transition-colors duration-200"
                      size="lg"
                      variant="outline"
                    >
                      Browse Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
