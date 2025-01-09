import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  if (loading) {
    return <div>Loading...</div>;
  }
  const Popular = menu.filter((item) => item.category === "popular");
  // console.log(Popular);
  return (
    <div className="mb-10">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
