import { Button, XStack } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { StarFill, StarRegular } from "@tamagui-extras/core";
function StarIcon({ filled, size = "$1", ...props }) {
  return <Button
    {...props}
    size={size}
    circular
    unstyled
    icon={filled ? <StarFill size={size} /> : <StarRegular size={size} />}
  />;
}
function LmStarRating({
  count = 5,
  onChange,
  value = null,
  disabled,
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelInline,
  labelProps,
  containerProps,
  ...iconProps
}) {
  const id = useId(), [rating, setRating] = useState(value), arr = Array.from(Array(count).keys());
  return <LmFormFieldContainer
    id={id}
    required={required}
    error={error}
    helperText={helperText}
    helperTextProps={helperTextProps}
    label={label}
    labelInline={labelInline}
    labelProps={labelProps}
    {...containerProps}
  ><XStack>{arr.map((value2) => {
    const currentRating = value2 + 1;
    return <StarIcon
      key={currentRating}
      {...iconProps}
      filled={currentRating <= (rating || 0)}
      onPress={() => {
        if (disabled)
          return;
        let newRating = rating === currentRating ? null : currentRating;
        setRating(newRating), typeof onChange == "function" && onChange(newRating);
      }}
    />;
  })}</XStack></LmFormFieldContainer>;
}
export {
  LmStarRating
};
//# sourceMappingURL=LmStarRating.js.map
