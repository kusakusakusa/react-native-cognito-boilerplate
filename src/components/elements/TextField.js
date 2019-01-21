import _ from 'lodash';
import React from 'react';
import {
  TouchableWithoutFeedback
} from 'react-native';
import styled from 'styled-components';

import { 
  COLOR,
} from '../../constants';

const fieldContainerHeight = 60;
const floatLabelFontSize = 12;
const inputFontSize = 16;

const Wrapper = styled.View`
  padding: 16px;
  height: ${fieldContainerHeight};
  justify-content: center;
  background-color: white;
`;

const Label = styled.Text`
  font-size: ${props => (props.value ? floatLabelFontSize : inputFontSize)};
  color: ${props => {
    if (props.value) {
      return props.hasError ? COLOR.ERROR : COLOR.BLACK;
    }

    return 'transparent';
  }};
  margin-bottom: 4px;
`;

const Input = styled.TextInput`
  font-size: ${inputFontSize};
  color: ${props => (props.hasError ? COLOR.ERROR : COLOR.BLACK)};
  border-width: 0;
  padding: 0;
  width: 100%;

  // does not seem to work yet */
  /* selectionColor: this.props.error ? COLOR.ERROR : COLOR.FONT_BLACK
`;

// uncontrolled
class TextField extends React.Component {
  focusTextInput = () => {
    this.refs.input.focus();
  }

  render() {
    const { label, value, error, ...props } = this.props;

    const hasError = !_.isNil(error) && error !== '';

    return (
      <TouchableWithoutFeedback onPress={this.focusTextInput}>
        <Wrapper>
          {
            value ? (
              <Label
                value={value}
                hasError={hasError}
              >
                {label}
              </Label>
            ) : (
              null
            )
          }
          <Input
            {...props}
            ref='input'
            placeholderTextColor={hasError ? COLOR.ERROR : 'gray'}
            value={value}
            hasError={hasError}
            underlineColorAndroid='transparent'
          />
        </Wrapper>
      </TouchableWithoutFeedback>
    );
  }
}

export default TextField;
