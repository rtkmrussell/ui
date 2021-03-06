import * as React from 'react';

import {
  mount,
  shallow
} from "enzyme";

import {
  Button
} from '../Button';

describe('Button', () => {
  it('renders without children', () => {
    const wrapper = shallow(
      <Button />
    );

    expect(wrapper.exists('StyledButton')).toBe(true);
  });

  it('renders with children', () => {
    const wrapper = shallow(
      <Button>Test Button</Button>
    );

    expect(wrapper.exists('StyledButton')).toBe(true);
  });

  it('sets the buttonType prop', () => {
    const wrapper = shallow(
      <Button type="danger">Test Button</Button>
    );

    expect(wrapper.find('StyledButton').prop('buttonType')).toBe('danger');
  });

  it('sets the disabled prop', () => {
    const wrapper = shallow(
      <Button disabled>Test Button</Button>
    );

    expect(wrapper.find('StyledButton').prop('disabled')).toBe(true);
  });

  it('sets the loading prop', () => {
    const wrapper = shallow(
      <Button loading>Test Button</Button>
    );

    // @ts-ignore
    expect(wrapper.find('StyledButton').prop('customProps').loading).toBe(true);
  });

  it('sets the ghost prop', () => {
    const wrapper = shallow(
      <Button ghost>Test Button</Button>
    );

    // @ts-ignore
    expect(wrapper.find('StyledButton').prop('customProps').ghost).toBe(true);
  });

  it('renders with loading and ghost props', () => {
    const wrapper = shallow(
      <Button loading ghost>Test Button</Button>
    );

    expect(wrapper.exists('Loading')).toBe(true);
  });

  it('renders with danger type and loading prop', () => {
    const wrapper = shallow(
      <Button type='danger' loading>Test Button</Button>
    );

    expect(wrapper.exists('Loading')).toBe(true);
  });

  it('renders with danger type, loading and ghost props', () => {
    const wrapper = shallow(
      <Button type='danger' loading ghost>Test Button</Button>
    );

    expect(wrapper.exists('Loading')).toBe(true);
  });

  it('sets the shape prop', () => {
    const wrapper = shallow(
      <Button shape={'circle'}>Test Button</Button>
    );

    // @ts-ignore
    expect(wrapper.find('StyledButton').prop('customProps').shape).toBe('circle');
  });

  it('sets the size prop', () => {
    const wrapper = shallow(
      <Button size={'large'}>Test Button</Button>
    );

    // @ts-ignore
    expect(wrapper.find('StyledButton').prop('customProps').size).toBe('large');
  });

  it('calls onClick handler', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(
      <Button onClick={onClickMock}>Test Button</Button>
    );

    wrapper.find('StyledButton').simulate('click');

    expect(onClickMock).toBeCalledTimes(1);
  });

  it('does not call onClick handler when button is disabled', () => {
    const onClickMock = jest.fn();

    // need to mount this one so that the pointer-events: none disables the clicking of the button
    const wrapper = mount(
      <Button disabled onClick={onClickMock}>Test Button</Button>
    );

    wrapper.find('StyledButton').simulate('click');

    expect(onClickMock).toBeCalledTimes(0);
  });
});
