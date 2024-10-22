import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Gap, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  propTop,
  frame,
  propHeight,
  fruitPunchJuice,
  group2,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const frameIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  return (
    <View
      style={[styles.editAddOnInner, styles.frameParentFlexBox, frameViewStyle]}
    >
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <Image
          style={[styles.frameIcon, frameIconStyle]}
          contentFit="cover"
          source={frame}
        />
        <Text style={styles.fruitPunchJuice}>{fruitPunchJuice}</Text>
        <Image style={styles.frameChild} contentFit="cover" source={group2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameIcon: {
    width: 43,
    height: 33,
    overflow: "hidden",
  },
  fruitPunchJuice: {
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    lineHeight: 23,
    fontFamily: FontFamily.body,
    color: Color.dark100,
    textAlign: "left",
    flex: 1,
  },
  frameChild: {
    width: 28,
    height: 28,
  },
  frameParent: {
    gap: Gap.gap_2xs,
    flex: 1,
  },
  editAddOnInner: {
    position: "absolute",
    top: 186,
    right: 0,
    left: 0,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_xs,
  },
});

export default FrameComponent;
