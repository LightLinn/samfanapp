import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Gap, Padding } from "../GlobalStyles";

const FrameComponent5 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameGroup, styles.parentFlexBox]}>
        <View style={styles.frame}>
          <Image
            style={[styles.rectangleIcon, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle.png")}
          />
        </View>
        <View style={styles.veggieBaconHotSauceSandwParent}>
          <Text
            style={styles.veggieBacon}
          >{`Veggie & Bacon Hot Sauce Sandwich `}</Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>$6.89</Text>
            <Text style={[styles.text1, styles.textTypo]}>$5.59</Text>
          </View>
        </View>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlineararrowright1.png")}
        />
      </View>
      <Image
        style={[styles.frameChild, styles.frameChildLayout]}
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
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.button,
    lineHeight: 18,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  rectangleIcon: {
    height: "70.27%",
    width: "108.33%",
    top: "13.51%",
    right: "-8.33%",
    bottom: "16.22%",
    left: "0%",
    position: "absolute",
  },
  frame: {
    width: 108,
    height: 37,
    overflow: "hidden",
  },
  veggieBacon: {
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
  veggieBaconHotSauceSandwParent: {
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
    width: "100%",
    alignSelf: "stretch",
    maxWidth: "100%",
  },
  frameParent: {
    top: 521,
    right: 0,
    left: 0,
    position: "absolute",
  },
});

export default FrameComponent5;
