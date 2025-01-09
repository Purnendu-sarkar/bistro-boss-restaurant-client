import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  //   const pagination = {
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return '<span class="' + className + '">' + (index + 1) + "</span>";
  //     },
  //   };
  const pagination = {
    clickable: true,
    type: "bullets",
  };
  return (
    <div className="p-5">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
              {items
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((item) => (
                  <FoodCard key={item._id} item={item}></FoodCard>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default OrderTab;
