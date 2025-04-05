import React from "react";
import styled from "styled-components";

interface ColorSwatchProps {
  color: string;
}

const Swatch = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  height: 1rem; /* équivalent à h-4 dans Tailwind */
  width: 1rem; /* équivalent à w-4 dans Tailwind */
  border-radius: 9999px; /* équivalent à rounded-full dans Tailwind */
  border: 1px solid var(--muted-foreground); /* correspond à border-muted-foreground */
`;

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ color }) => {
  return <Swatch color={color} />;
};
