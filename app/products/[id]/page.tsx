import { notFound } from "next/navigation";
import { getProductById, getAllProducts } from "@/src/lib/mock-data";
import ProductDetail from "@/src/features/products/components/ProductDetail";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = getProductById(Number(id));
  return {
    title: product ? `${product.name} — Shome` : "Product Not Found",
    description: product?.description ?? "",
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(Number(id));
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
