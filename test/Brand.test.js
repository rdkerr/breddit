import { mount } from '@vue/test-utils'
import Brand from '../src/components/navbar/Brand.vue'

describe('Brand', () => {
  const wrapper = mount(Brand)
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test('should render content correctly', () => {
    expect(wrapper.find('p').text()).toEqual('breddit')
  })
})
