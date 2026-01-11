"use client";
import { useParams } from "next/navigation";
import React, { Suspense } from "react";
import Loading from "../loading";

const ProductById = () => {
  const products = [
    {
      id: 1,
      name: "Iphone",
      details: "A smartphone with a great camera and battery life.",
    },
    {
      id: 2,
      name: "Samsung",
      details: "A smartphone with a great camera and battery life.",
    },
  ];
  const { productId } = useParams();
  const product = products.find((e) => e?.id == productId);
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1>{product?.name}</h1>
        <h1>{product?.details}</h1>
      </div>
    </Suspense>
  );
};

export default ProductById;