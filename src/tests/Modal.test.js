import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../Header";
import { Modal } from "react-bootstrap";

describe("Header", () => {
  it("should show the modal when 'Login' button is clicked", () => {
    const wrapper = shallow(<Header />);
    const loginButton = wrapper.find('#loginBtn');

    expect(wrapper.find(Modal).prop("show")).toBe(false);

    loginButton.simulate("click");

    expect(wrapper.find(Modal).prop("show")).toBe(true);
  });
});