export default async function RestaurantPage({ params }) {
  const { slug } = await params;

  return (
    <main style={{ padding: "20px" }}>
      <h1>Page restaurant</h1>
      <p>Slug : {slug}</p>
    </main>
  );
}

