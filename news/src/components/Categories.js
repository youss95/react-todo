import { NavLink } from "react-router-dom";

const categories = [
  { name: "all", text: "all" },
  { name: "entertainment", text: "엔터" },
  { name: "business", text: "비지" },
  { name: "health", text: "헬스" },
  { name: "science", text: "과학" },
];

const Categories = ({ onSelect, category }) => {
  return (
    <>
      {categories.map((cate) => (
        <NavLink
          key={cate.name}
          onClick={() => onSelect(cate.name)}
          to={cate.name === "all" ? "/" : `/${cate.name}`}
        >
          {cate.text}
        </NavLink>
      ))}
    </>
  );
};

export default Categories;
