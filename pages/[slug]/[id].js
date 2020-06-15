import { useRouter } from "next/router";

export default function DynamicRoute() {
  const router = useRouter();
  const { slug, id } = router.query;

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
