import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { Skeleton } from "../ui/skeleton";

interface Subcategory {
  slug: string;
  name: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  subcategories?: Subcategory[];
}

export const Categories: React.FC = () => {
  const { categories, loading } = useSelector(
    (state: RootState) => state?.categories
  );
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const navigator = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (category: Category) => {
    if (category.subcategories && category.subcategories.length > 0) {
      toggleCategory(category._id);
    } else {
      navigateToCategory(category);
    }
  };

  const navigateToCategory = (category: Category) => {
    // Implement your navigation logic here
    navigator(`/shop/category/${category?.slug}`);
  };

  if (loading) {
    return <CategoriesSkeleton />;
  }

  return (
    <>
      {categories.map((category) => (
        <div key={category._id} className="mb-2 categories">
          <Button
            variant="ghost"
            className={`w-full px-0 justify-between text-left font-medium hover:text-primary ${
              pathName.includes("/" + category.slug)
                ? "text-primary"
                : "text-color-ternary"
            } transition-colors duration-200`}
            onClick={() => handleCategoryClick(category)}
          >
            <span>{category.name}</span>
            {category.subcategories &&
              category.subcategories.length > 0 &&
              (expandedCategories.includes(category._id) ? (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500" />
              ))}
          </Button>
          {expandedCategories.includes(category._id) &&
            category.subcategories && (
              <div className="ml-4 mt-1 space-y-1 flex flex-col border-l-2 border-gray-200">
                {category.subcategories.map((subcategory) => (
                  <NavLink
                    className="w-max justify-start pl-4 font-normal text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                    key={subcategory.slug}
                    to={`/shop/category/${category?.slug}/${subcategory?.slug}`}
                  >
                    <span className="block">{subcategory.name}</span>
                  </NavLink>
                ))}
              </div>
            )}
        </div>
      ))}
    </>
  );
};

export const CategoriesSkeleton = () => {
  return (
    <div className="space-y-4">
      {/* Parent Categories Skeleton */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className="mb-2 space-y-2">
          {/* Category Button Skeleton */}
          <div className="flex justify-between items-center w-full">
            <Skeleton className="h-6 w-3/4 rounded-md" />
            <Skeleton className="h-4 w-4 rounded-sm" />
          </div>

          {/* Subcategories Skeleton */}
          {i % 2 === 0 && (
            <div className="ml-4 mt-1 space-y-2">
              {[...Array(3)].map((_, j) => (
                <Skeleton key={j} className="h-4 w-2/3 rounded-sm ml-4" />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
