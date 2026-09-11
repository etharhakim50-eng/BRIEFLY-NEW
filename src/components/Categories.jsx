const categories = [
  "general",
  "technology",
  "business",
  "sports",
  "health",
  "entertainment",
  "science"
];

function Categories({
  selectedCategory,
  setSelectedCategory
}) {

  return (
    <div className="categories">

      {categories.map(function (category) {

        return (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "category active"
                : "category"
            }
            onClick={function () {
              setSelectedCategory(category);
            }}
          >
            {category}
          </button>
        );

      })}

    </div>
  );
}

export default Categories;