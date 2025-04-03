import { Card, CardContent } from "@/components/ui/card";
import { HomeCard } from "@/components/shared/home/home-card";
import { HomeCarousel } from "@/components/shared/home/home-carousel";
import {
  getAllCategories,
  getProductsForCard,
} from "@/lib/actions/product.actions";
import { toSlug } from "@/lib/utils";

export default async function HomePage() {
  const categories = (await getAllCategories()).slice(0, 4);
  const newArrivals = await getProductsForCard({
    tag: "new-arrival",
    limit: 4,
  });
  const featureds = await getProductsForCard({
    tag: "featured",
    limit: 4,
  });
  const bestSellers = await getProductsForCard({
    tag: "best-seller",
    limit: 4,
  });
  const carousels = [
    {
      image: "/images/banner-1.jpg",
      title: "Discover Our New Arrivals",
      url: "/search?tag=new-arrival",
      buttonCaption: "Shop Now",
    },
    {
      image: "/images/banner-2.jpg",
      title: "Best Sellers Available Now",
      url: "/search?tag=best-seller",
      buttonCaption: "Discover",
    },
  ];

  const cards = [
    {
      title: "Categories to explore",
      link: {
        text: "See More",
        href: "/search",
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: "Explore New Arrivals",
      items: newArrivals,
      link: {
        text: "View All",
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: "Discover Best Sellers",
      items: bestSellers,
      link: {
        text: "View All",
        href: "/search?tag=best-seller",
      },
    },
    {
      title: "Featured Products",
      items: featureds,
      link: {
        text: "Shop Now",
        href: "/search?tag=featured",
      },
    },
  ];

  return (
    <>
      <HomeCarousel items={carousels} />
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCard cards={cards} />
      </div>
    </>
  );
}
