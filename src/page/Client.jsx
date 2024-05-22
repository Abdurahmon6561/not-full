import { useGetData } from "../hooks/UseGetData";

const Client = () => {
  const categories = useGetData("categories");

  return (
    <div className=" flex justify-around">
      {categories &&
        categories.map((category) => (
          <div key={category.id}>
            <img src={category.image} alt={`${category.name}`} />
            <h2>{category.name}</h2>
          </div>
        ))}
    </div>
  );
};

export default Client;
