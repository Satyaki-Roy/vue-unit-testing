import ExerciseForm from "@/exercise-2";
import { createWrapper, mount } from "@vue/test-utils";
import { nextTick } from "vue";

test("follow the user through the form", async () => {
  const wrapper = mount(ExerciseForm);
  expect(wrapper).toMatchSnapshot();

  const form = wrapper.find("form");
  const input = wrapper.find("input");

  input.setValue("Breakfast");
  form.trigger("submit");

  await nextTick();
  expect(wrapper).toMatchSnapshot();

  const button = wrapper.find("li").find("button");
  button.trigger("click");

  await nextTick();
  expect(wrapper).toMatchSnapshot();
});
