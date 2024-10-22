import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent2 = ({ next, vuesaxlineararrowRight, propBottom }) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("bottom", propBottom),
    };
  }, [propBottom]);

  return (
    <View
      style={[styles.signUpInner, styles.nextParentFlexBox, frameView2Style]}
    >
      <View style={[styles.nextParent, styles.nextParentFlexBox]}>
        <Text style={styles.next}>{next}</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          contentFit="cover"
          source={vuesaxlineararrowRight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  next: {
    fontSize: FontSize.button_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.button,
    color: Color.light100,
    textAlign: "left",
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    height: 24,
  },
  nextParent: {
    gap: Gap.gap_2xs,
  },
  signUpInner: {
    position: "absolute",
    marginLeft: -174,
    bottom: 30,
    left: "50%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.blue60,
    width: 348,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_xl,
  },
});

export default FrameComponent2;
