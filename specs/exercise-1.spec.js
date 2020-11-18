import { mount } from "@vue/test-utils";
import { name } from "faker";
import UserList from "@/exercise-1";

test("component renders the user", () => {
  const wrapper = mount(UserList, {
    propsData: {
      users: [name.findName()],
    },
  });

  const li = wrapper.find("li");

  expect(li.text()).toBe(wrapper.props("users")[0]);

  wrapper.setProps({
    users: [name.findName(), name.findName()],
  });

  wrapper.vm.$nextTick(() => {
    const li = wrapper.findAll("li");
    expect(li.length).toBe(2);
    expect(li.at(0).text()).toBe(wrapper.props("users")[0]);
  });
});
