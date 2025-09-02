import { Card, CardContent } from "~/ui/primitives/card";
import { Button } from "~/ui/primitives/button";
import { Input } from "~/ui/primitives/input";
import {
  Search,
  User,
  ShoppingCart,
  Heart,
  Laptop,
  Smartphone,
  Camera,
  Headphones,
  Tv,
  Gamepad2,
  Watch,
  Boxes,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-gray-100 font-sans">
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
              <select className="border dark:border-gray-800 bg-transparent rounded-lg px-3 py-2 text-sm">
                <option>Select a Category</option>
                <option>Computers</option>
                <option>Phones</option>
                <option>Accessories</option>
              </select>
              <Input placeholder="What do you need..." className="flex-1" />
              <Button>
                <Search className="w-4 h-4 mr-2" /> Search
              </Button>
            </div>

            {/* Featured Section */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="col-span-2 relative h-[455px] overflow-hidden rounded-none">
                <Image
                  src="/iphone.jpg"
                  alt="iPhone 13"
                  fill
                  className="object-cover"
                />
                <CardContent className="absolute inset-0 bg-black/60 flex flex-col justify-center p-8 text-white">
                  <p className="text-sm mb-2">FEATURED PRODUCT</p>
                  <h2 className="text-3xl font-bold font-serif">iPhone 13</h2>
                  <p className="mt-2">
                    Price only <span className="font-semibold">$1,099</span>
                  </p>
                  <Button className="mt-4 w-fit">Shop Now</Button>
                </CardContent>
              </Card>

              <div className="flex flex-col gap-4">
                <Card className="relative h-32 overflow-hidden rounded-none">
                  <Image
                    src="/smartwatch.png"
                    alt="Smart Watch"
                    fill
                    className="object-cover"
                  />
                  <CardContent className="absolute inset-0 bg-black/60 flex flex-col justify-center p-4 text-white">
                    <h3 className="font-semibold font-serif">Smart Watch</h3>
                    <p className="text-sm">Starting from $399.99</p>
                    <Button size="sm" className="mt-2 w-fit">
                      Shop Now
                    </Button>
                  </CardContent>
                </Card>
                <Card className="relative h-32 overflow-hidden rounded-none">
                  <Image
                    src="/headphones.png"
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
              icon: <Laptop className="w-6 h-6" />,
            },
            {
              name: "Smart Phone",
              img: "/phone.png",
              icon: <Smartphone className="w-6 h-6" />,
            },
            {
              name: "Camera",
              img: "/cctv.webp",
              icon: <Camera className="w-6 h-6" />,
            },
            {
              name: "Drones",
              img: "/drone.png",
              icon: <Boxes className="w-6 h-6" />,
            },
            {
              name: "Headphones",
              img: "/airpods.png",
              icon: <Headphones className="w-6 h-6" />,
            },
            {
              name: "Speaker",
              img: "/speaker.png",
              icon: <Boxes className="w-6 h-6" />,
            },
          ].map((cat) => (
            <Card
              key={cat.name}
              className="flex flex-col items-center justify-center p-4 hover:shadow-lg transition rounded-2xl dark:border-gray-800"
            >
              {cat.icon}
              <Image src={cat.img} alt={cat.name} width={80} height={80} />
              <p className="mt-2 text-sm font-medium font-serif">{cat.name}</p>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
