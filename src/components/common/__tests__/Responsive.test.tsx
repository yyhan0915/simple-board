import { shallow } from 'enzyme';
import Responsive from '../Responsive';
import React from 'react';

describe('Responsive changes the text after click', () => {
    it('rendered without Crash', () => {
        const wrapper = shallow(<Responsive />);
        expect(wrapper).toMatchSnapshot();
    });
});
