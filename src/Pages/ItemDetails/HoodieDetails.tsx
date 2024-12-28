import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Products } from "../../Utils/Products";
import { Product } from "../../Utils/types";
import { useStore } from "../../Context/StoreContextProvider";

export default function HoodieDetails() {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, favourites } = useStore();

  const [openSections, setOpenSections] = useState({
    description: false,
    details: false,
    careGuide: false,
  });

  const { id } = useParams();

  let hoodie: Product | undefined = Products.find((value) => value.id === id);
  console.log(hoodie);
  

  if (!hoodie) {
    return <p>Hoodie not found</p>;
  }

  const handleClick = (id: string) => {
    navigate(`/hoodie/${id}`); // Navigate to the detail page with the hoodie index as a parameter
  };

  return (
    <div className="h-full w-full flex justify-center pt-16 pb-16">
      <div className="flex flex-col w-[90vw] h-full gap-y-2 lg:flex-row justify-center">
        <div className="lg:w-2/4 h-[370px] ">
          <div className="flex justify-center text-start">
            <img src={hoodie.image} alt={hoodie.name} className="h-50 w-44" />
          </div>
          <div className="w-full h-55 flex justify-center gap-2">
            <img src={hoodie.image} alt="" className="h-44 " />
            <img src={hoodie.image} alt="" className="h-44 " />
          </div>
        </div>

        <div className="lg;w-2/4 flex gap-y-3  flex-col lg:gap-y-10">
          <div className="flex justify-between h-20 w-full ">
            <div>
              <h1>{hoodie.name}</h1>
              <p>MRP inclusive of all taxes</p>
              <p>Rs. {hoodie.price}.00</p>
            </div>

            <div className="cursor-pointer">
              {favourites.find((item) => item.id === hoodie.id) ? (
                <i className="fa-solid fa-heart text-red-500 hiiden lg:block"></i>
              ) : (
                <i className="fa-regular fa-heart hiiden lg:block"></i>
              )}
            </div>
          </div>
          {/* <h3>Color</h3>
                    <div className="flex justify-center gap-3">
                        {HOODIES.map((value, index) => (
                            <div key={index} className="flex flex-col items-center gap-y-2 cursor-pointer"
                                onClick={() => handleClick(value.id)} >
                                <img src={value.url} alt={value.color} className="size-10" />
                                <div>
                                    <p>{value.color}</p>
                                </div>
                            </div>
                        ))}

                    </div> */}
          {/* {
                        <div className="flex justify-around cursor-pointer">
                            {
                                sizes.map((value, index) => {
                                    return (
                                        <div className="flex items-center" key={index}>
                                            <button
                                                className={`w-16 h-8 border-[1px] border-black ${value === selectedSize ? "bg-red-300" : ""}`}
                                                onClick={() => setSelectedSize(value)}
                                            >{value}</button>
                                        </div>
                                    );
                                })
                            }

                        </div>
                    } */}

          <div
            className="flex gap-1 items-center justify-center w-full h-12 lg:h-[50px] bg-black text-white "
            onClick={() => addToCart(hoodie)}
          >
            <i className="fa-solid fa-shopping-bag"></i>
            Add
          </div>

          <div>
            <div>
              <p>Find in store</p>
            </div>
            <div>
              <p>Delivery Time : 2-7 Days</p>
            </div>
          </div>

          <div>
            <p>(2876 Reviews)</p>
          </div>

          <div className="details flex flex-col h-full  ">
            <div
              className={`details flex flex-col border-t-[1px] border-b-[1px] border-black justify-center lg:w-[441px] ${
                openSections.description
                  ? "h-40 scale-in-ver-top"
                  : "h-10 scale-in-ver-bottom"
              }`}
            >
              <div className="flex justify-between">
                <h3>Description & Fit</h3>
                <i
                  className={`fa-solid ${
                    openSections.description ? "fa-arrow-up" : "fa-arrow-down "
                  }`}
                ></i>
              </div>
              <div
                className={`${openSections.description ? "block" : "hidden"}`}
              >
                <p>
                  Hoodie in midweight sweatshirt fabric made from a cotton blend
                  with a soft brushed inside. Jersey-lined, drawstring hood,
                  dropped shoulders, long sleeves, a kangaroo pocket and wide
                  ribbing at the cuffs and hem. Loose fit for a generous but not
                  oversized silhouette.
                </p>
              </div>
            </div>

            <div
              className={`details flex flex-col   border-black justify-center lg:w-[441px] ${
                openSections.details
                  ? "h-40 scale-in-ver-top"
                  : "h-10 scale-in-ver-bottom"
              }`}
            >
              <div className="flex justify-between">
                <h3>Details</h3>
                <i
                  className={`fa-solid ${
                    openSections.details ? "fa-arrow-up" : "fa-arrow-down "
                  }`}
                ></i>
              </div>
              <div className={`${openSections.details ? "block " : "hidden"}`}>
                <p>
                  Hoodie in midweight sweatshirt fabric made from a cotton blend
                  with a soft brushed inside. Jersey-lined, drawstring hood,
                  dropped shoulders, long sleeves, a kangaroo pocket and wide
                  ribbing at the cuffs and hem. Loose fit for a generous but not
                  oversized silhouette.
                </p>
              </div>
            </div>

            <div
              className={`details flex flex-col border-t-[1px] border-b-[1px] border-black justify-center lg:w-[441px]  ${
                openSections.careGuide
                  ? "h-40 scale-in-ver-top"
                  : "h-10 scale-in-ver-bottom"
              }`}
            >
              <div className="flex justify-between">
                <h3>Care Guide</h3>
                <i
                  className={`fa-solid ${
                    openSections.careGuide ? "fa-arrow-up" : "fa-arrow-down "
                  }`}
                ></i>
              </div>
              <div className={`${openSections.careGuide ? "block" : "hidden"}`}>
                <p>
                  Hoodie in midweight sweatshirt fabric made from a cotton blend
                  with a soft brushed inside. Jersey-lined, drawstring hood,
                  dropped shoulders, long sleeves, a kangaroo pocket and wide
                  ribbing at the cuffs and hem. Loose fit for a generous but not
                  oversized silhouette.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}