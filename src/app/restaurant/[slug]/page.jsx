import restaurantsData from "@/data/restaurants.json";
import Image from "next/image";
import MenuItem from "@/components/MenuItem/MenuItem";
import FavoriteHeart from "@/components/FavoriteHeart/FavoriteHeart";


export default async function RestaurantPage({ params }) {
  const { slug } = await params;

  const restaurant = restaurantsData.restaurants.find(
    (restaurant) => restaurant.slug === slug
  );

  if (!restaurant) {
    return null;
  }

  return (
    <>
      <div className="heroImage">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="image"
          priority
        />
      </div>

      <main className="mainWrapper">
        <div className="contentWrapper">
          <div className="restaurantHeader">
            <h1 className="restaurantName">
              {restaurant.name}
            </h1>

            <FavoriteHeart />
          </div>

          <div className="menu">
            {Object.entries(restaurant.menu).map(([category, items]) => (
              <section key={category}>
                <h2 className="sectionTitle">
                  {category}
                </h2>

                {items.map((item, index) => (
                  <MenuItem
                    key={index}
                    item={item}
                    index={index}
                  />
                ))}
              </section>
            ))}
          </div>

          <button className="orderButton">
            Commander
          </button>
        </div>
      </main>
    </>
  );
}
