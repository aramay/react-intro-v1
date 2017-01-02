/** eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { store, rootReducer } = require('../js/Store.jsx')

const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')


xdescribe('<Search />', () => {
  it('It should render brand', () => {
    const wrapper = shallow(<Search/>)
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })
  it('shold render as many shows as there are data for', () => {
    const wrapper = shallow(<Search/>)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })
  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search/>)
    const input = wrapper.find('.search-input')

    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)

  })

})

describe('Store', () => {
  it('Should bootstrap', () => {
    // goes from having nothing
    const state = rootReducer(undefined, { type: '@@redux/INIT'})
    // creat this initial state to test
    expect(state).to.deep.equal({searchTerm: ''})
  })
  it('Should handle setSearchTerm action', () => {
    const state = rootReducer({searchTerm: 'some random string'}, {type: 'setSearchTerm', value: 'correct string'})
    expect(state).to.deep.equal({searchTerm: 'correct string'})
  })
})


