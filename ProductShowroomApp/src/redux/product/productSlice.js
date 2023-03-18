import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currentProduct: null,
  message: "",
  isLoading: true,
  favouriteProductIds: localStorage.getItem("favouriteProductIds")
    ? JSON.parse(localStorage.getItem("favouriteProductIds"))
    : [],
  categories: [],
  filter: {
    selectedCategories: [],
    filteredTitle: "",
  },
  routes: [
    { key: "/", label: "Homepage",isVisibleAtMenu: true},
    { key: "/products", label: "Products",isVisibleAtMenu: true},
    { key:"/products/:id" , label : "ProductDetail",isVisibleAtMenu: false},
    { key:"/profile" , label : "Profile",isVisibleAtMenu: false},
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setFilteredCategory: (state, action) => {
      state.filter.selectedCategories = action.payload;
    },
    setTitleToFilter: (state, action) => {
      state.filter.filteredTitle = action.payload.toLocaleLowerCase();
    },
    addFavouriteProduct: (state, action) => {
      state.favouriteProductIds.push(action.payload);
      if (state.favouriteProductIds.includes(state.currentProduct.id)) {
        state.currentProduct = { ...state.currentProduct, favourite: true };
      }

      localStorage.setItem(
        "favouriteProductIds",
        JSON.stringify(state.favouriteProductIds)
      );
    },
    removeFavouriteProduct: (state, action) => {
      if (state.favouriteProductIds.includes(state.currentProduct.id)) {
        state.currentProduct = { ...state.currentProduct, favourite: false };
      }

      state.favouriteProductIds.pop(action.payload);

      localStorage.setItem(
        "favouriteProductIds",
        JSON.stringify(state.favouriteProductIds)
      );
    },
  },
});

export const {
  setProducts,
  setMessage,
  setIsLoading,
  addFavouriteProduct,
  removeFavouriteProduct,
  setCurrentProduct,
  setCategories,
  setTitleToFilter,
  setFilteredCategory,
} = productSlice.actions;

export default productSlice.reducer;
