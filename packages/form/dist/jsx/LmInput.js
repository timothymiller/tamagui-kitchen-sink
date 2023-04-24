import { Input, Stack, TextArea } from "tamagui";
import { useId, useState } from "react";
import { LmFormFieldContainer } from "./LmFormFieldContainer";
import { Eye, EyeSlash } from "tamagui-phosphor-icons";
import { Pressable } from "react-native";
function LmInput({
  required,
  error,
  helperText,
  helperTextProps,
  label,
  labelProps,
  labelInline,
  multiline,
  containerProps,
  isPassword,
  passwordIconProps,
  fullWidth,
  ...rest
}) {
  const genId = useId();
  const [show, setShow] = useState(false);
  const id = rest.id || genId;
  const currentInputProps = {
    ...rest
  };
  if (error) {
    currentInputProps.theme = "red";
    currentInputProps.borderColor = error ? "$red8" : void 0;
  }
  if (fullWidth) {
    currentInputProps.minWidth = "100%";
  }
  let secureTextEntry = !!(rest.secureTextEntry || isPassword);
  return <LmFormFieldContainer
    id={id}
    error={error}
    required={required}
    labelProps={labelProps}
    label={label}
    fullWidth={fullWidth}
    size={rest.size}
    labelInline={labelInline}
    helperText={helperText}
    helperTextProps={helperTextProps}
    {...containerProps}
  >{multiline ? <TextArea
    {...currentInputProps}
    placeholderTextColor={rest.placeholderTextColor}
  /> : secureTextEntry ? <Stack position="relative" width={fullWidth ? "100%" : currentInputProps?.width}>
    <Input
      {...currentInputProps}
      secureTextEntry={!show}
      autoCapitalize="none"
      placeholderTextColor={rest.placeholderTextColor}
    />
    <Pressable
      style={{
        position: "absolute",
        top: "50%",
        transform: [{ translateY: -0.5 * 20 }],
        height: 20,
        right: 15
      }}
      onPress={() => {
        setShow((state) => !state);
      }}
    >{show ? <EyeSlash {...passwordIconProps} /> : <Eye {...passwordIconProps} />}</Pressable>
  </Stack> : <Input {...currentInputProps} autoCapitalize="none" />}</LmFormFieldContainer>;
}
export {
  LmInput
};
//# sourceMappingURL=LmInput.js.map
