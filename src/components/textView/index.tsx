import {Text, TextProps} from 'react-native';
import React from 'react';
import {colors} from '../../theme';

export const TextView = (props: TextProps) => {
  const {children, style, ...rest} = props;
  return (
    <Text style={[{color: colors.black}, style]} {...rest}>
      {children}
    </Text>
  );
};
