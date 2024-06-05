import Link from "next/link";
import Label from "@/modules/blog-components/ui/label";

export default function CategoryLabel({ nomargin = false, category }) {
  console.log(category);

  return (
    <div className="flex gap-3">
      {/* {categories?.length && */}
      {/* categories.slice(0).map((category, index) => ( */}
      <Link
        // href={`/category/${category.slug.current}`}
        href={"#"}
        // key={index}
      >
        <Label nomargin={nomargin} color={"blue"}>
          {/* {category.title} */}
          {category.name}
        </Label>
      </Link>
      {/* ))} */}
    </div>
  );
}
