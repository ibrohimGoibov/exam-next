import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "./loading";

const page = () => {
  const products = [
    { id: 1, name: "Iphone" },
    { id: 2, name: "Samsung" },
  ];
  return (
    <div>
      {products.map((e) => {
        return (
          <div
            className="border-2 border-amber-50 p-2 rounded-2xl w-[100px] my-1"
            key={e.id}
          >
            <Link href={`/product/${e.id}`}>
              <h1>{e.name}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;