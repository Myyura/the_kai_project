import React from 'react';

export default function Heading({as: Component = 'h2', ...props}) {
  return <Component {...props} />;
}
