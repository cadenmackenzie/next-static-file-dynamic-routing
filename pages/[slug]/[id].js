function DynamicRoute({ slug, id }) {
  return (
    <>
      <h1>
        This is <code>/[slug]/[id]</code>
      </h1>
      <p>
        <code>slug</code> is <code>{slug}</code>
      </p>
      <p>
        <code>id</code> is <code>{id}</code>
      </p>
    </>
  );
}

DynamicRoute.getInitialProps = async (ctx) => {
  const { slug, id } = ctx.query;
  return { slug, id };
};

export default DynamicRoute;
