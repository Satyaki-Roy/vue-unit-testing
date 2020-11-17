import TestComponent from "@/test";
import ListComponent from "@/list";
import { mount, shallowMount } from "@vue/test-utils";

test("mount a vue component", () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: "VueSchool",
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test("testing the List Component", async () => {
  const wrapper = mount(ListComponent);
  const movies = wrapper.vm.marvelMovies;
  await wrapper.setData({ marvelMovies: [...movies, "Endgame"] });
  expect(wrapper).toMatchSnapshot();
});
