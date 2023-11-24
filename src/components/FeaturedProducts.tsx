const FeaturedProducts = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

export default FeaturedProducts;
