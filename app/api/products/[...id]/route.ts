import { NextResponse } from "next/server";
import { products } from "../../products";
import { menuCatalog } from "../../menuCatalog";

export async function GET(
  req: Request,
  { params }: { params: { id: string[] } }
) {
  let currentProducts = products;
  let menuData = menuCatalog;

  if (params.id[0] && !params.id[1]) {
    menuData = menuData.filter((product) =>
      product.href
        .toLocaleLowerCase()
        .includes(params.id[0].toLocaleLowerCase())
    );
    return NextResponse.json(menuData);
  }

  if (params.id[0] && params.id[1] && !params.id[2]) {
    currentProducts = products.filter(
      (product) =>
        product.type
          .toLocaleLowerCase()
          .includes(params.id[0].toLocaleLowerCase()) &&
        product.category
          .toLocaleLowerCase()
          .includes(params.id[1].toLocaleLowerCase()) &&
        product.type.length === params.id[0].length &&
        product.category.length === params.id[1].length
    );
    return NextResponse.json(currentProducts);
  }

  if (params.id[0] && params.id[1] && params.id[2] && !params.id[3]) {
    currentProducts = products.filter(
      (product) =>
        product.type
          .toLocaleLowerCase()
          .includes(params.id[0].toLocaleLowerCase()) &&
        product.category
          .toLocaleLowerCase()
          .includes(params.id[1].toLocaleLowerCase()) &&
        product.variety
          .toLocaleLowerCase()
          .includes(params.id[2].toLocaleLowerCase()) &&
        product.type.length === params.id[0].length &&
        product.category.length === params.id[1].length &&
        product.variety.length === params.id[2].length
    );
    return NextResponse.json(currentProducts);
  }

  if (
    params.id[0] &&
    params.id[1] &&
    params.id[2] &&
    params.id[3] &&
    params.id[4]
  ) {
    currentProducts = products.filter(
      (product) =>
        product.type
          .toLocaleLowerCase()
          .includes(params.id[0].toLocaleLowerCase()) &&
        product.category
          .toLocaleLowerCase()
          .includes(params.id[1].toLocaleLowerCase()) &&
        product.variety
          .toLocaleLowerCase()
          .includes(params.id[2].toLocaleLowerCase()) &&
        product.id.map((item) =>
          item.toLocaleLowerCase().includes(params.id[3].toLocaleLowerCase())
        ) &&
        product.ENGSize.map((item) =>
          item.toLocaleLowerCase().includes(params.id[4].toLocaleLowerCase())
        )
    );

    return NextResponse.json(currentProducts);
  } else {
    return NextResponse.json(currentProducts);
  }
}
