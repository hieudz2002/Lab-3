import React from 'react';
import { MaterialCommunityIcons} from '@expo/vector-icons/MaterialCommunityIcons';

export const Icon = ({ name, size, color, style }) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
};
