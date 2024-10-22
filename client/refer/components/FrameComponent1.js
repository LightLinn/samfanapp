import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Color, Gap, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent1 = ({
  textTop,
  frame,
  vectorIconWidth,
  vectorIconHeight,
  classicCheeseBurgerCals,
  prop,
  prop1,
  vuesaxlineararrowRight,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", textTop),
    };
  }, [textTop]);

  const frameIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("width", vectorIconWidth),
      ...getStyleValue("height", vectorIconHeight),
    };
  }, [vectorIconWidth, vectorIconHeight]);

  return (
    <View style={[styles.frameParent, frameView1Style]}>
      <View style={[styles.frameGroup, styles.parentFlexBox]}>
        <Image
          style={[styles.frameIcon, frameIcon1Style]}
          contentFit="cover"
          source={frame}
        />
        <View style={styles.classicCheeseBurger400CalParent}>
          <Text style={styles.classicCheeseBurger}>
            {classicCheeseBurgerCals}
          </Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
            <Text style={[styles.text1, styles.textTypo]}>{prop1}</Text>
          </View>
        </View>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          contentFit="cover"
          source={vuesaxlineararrowRight}
        />
      </View>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    fontFamily: FontFamily.button,
    lineHeight: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  frameIcon: {
    width: 98,
    height: 41,
    overflow: "hidden",
  },
  classicCheeseBurger: {
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    lineHeight: 23,
    fontFamily: FontFamily.body,
    textAlign: "left",
    color: Color.dark100,
    alignSelf: "stretch",
  },
  text: {
    textDecoration: "line-through",
    color: Color.dark100,
    fontFamily: FontFamily.button,
    lineHeight: 18,
    fontSize: FontSize.size_base,
  },
  text1: {
    fontWeight: "700",
    color: Color.blue100,
  },
  parent: {
    gap: Gap.gap_xl,
  },
  classicCheeseBurger400CalParent: {
    flex: 1,
    gap: Gap.gap_3xs,
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    height: 24,
  },
  frameGroup: {
    paddingHorizontal: Padding.p_2xl,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_lg,
    gap: Gap.gap_2xl,
  },
  frameChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    top: 307,
    right: 0,
    left: 0,
  },
});

export default FrameComponent1;
