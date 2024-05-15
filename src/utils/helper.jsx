import { MAIN_API } from "../utils/constants";

export const idIndexPair = {
  425: 0,
  229: 1,
  121603: 2,
  492159: 3,
  428: 4,
  592285: 5,
  337335: 6,
  108158: 7,
  92389: 8,
  223: 9,
  5934: 10,
  410683: 11,
  118278: 12,
  656392: 13,
  419413: 14,
};
export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

// export async function getRestaurants(
//   setAllRestaurants,
//   setFilteredRestaurants
// ) {
//   try {
//     const data = await fetch(MAIN_API);
//     const json = await data.json();
//     setAllRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     setFilteredRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     const mockData = await json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//     console.log(mockData);
//     return mockData;
//   } catch (err) {
//     console.log(err);
//   }
// }

export function getMenuFromResID(
  resId,
  ARRAY_OF_MENU_OF_RESTAURANTS,
  idIndexPair
) {
  // eslint-disable-next-line no-prototype-builtins
  if (idIndexPair.hasOwnProperty(resId)) {
    return ARRAY_OF_MENU_OF_RESTAURANTS[idIndexPair[resId]].data;
  } else {
    return null;
  }
}
