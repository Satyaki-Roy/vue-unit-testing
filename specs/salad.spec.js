import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import SaladBowlComponent from "@/salad-bowl";
import saladStore from "@/store/salad-store";

const VueWithVuex = createLocalVue();
VueWithVuex.use(Vuex);

test("store is loaded", () => {
  const store = new Vuex.Store(saladStore);
  const wrapper = mount(SaladBowlComponent, {
    store,
    localVue: VueWithVuex,
  });
  store.state.salad.push("mango");
  expect(wrapper.vm.salad).toEqual(expect.arrayContaining(["mango"]));
});

test("store works", () => {
  const store = new Vuex.Store(saladStore);
  const wrapper = mount(SaladBowlComponent, {
    store,
    localVue: VueWithVuex,
  });
  wrapper.vm.addIngredient("tomato");
  expect(wrapper.vm.salad).toEqual(expect.arrayContaining(["tomato"]));
});
