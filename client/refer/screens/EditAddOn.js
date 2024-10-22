import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent from "../components/FrameComponent";
import {
  FontFamily,
  Color,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const EditAddOn = () => {
  return (
    <View style={styles.editAddOn}>
      <View style={[styles.editAddOnChild, styles.basePosition]} />
      <Text style={[styles.required, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.drinks, styles.drinksTypo]}>Drinks</Text>
      <Text style={[styles.editJuice, styles.drinksLayout]}>Edit Juice</Text>
      <FrameComponent
        frame={require("../assets/frame.png")}
        fruitPunchJuice="Fruit Punch Juice"
        group2={require("../assets/group-2.png")}
      />
      <FrameComponent
        propTop={253}
        frame={require("../assets/frame1.png")}
        propHeight={34}
        fruitPunchJuice="Orange Juice"
        group2={require("../assets/ellipse-752.png")}
      />
      <FrameComponent
        propTop={319}
        frame={require("../assets/frame2.png")}
        propHeight={33}
        fruitPunchJuice="Ginger Shot Juice"
        group2={require("../assets/ellipse-7521.png")}
      />
      <FrameComponent
        propTop={386}
        frame={require("../assets/frame3.png")}
        propHeight={34}
        fruitPunchJuice="Sweet Guava Juice"
        group2={require("../assets/ellipse-752.png")}
      />
      <FrameComponent
        propTop={453}
        frame={require("../assets/frame4.png")}
        propHeight={28}
        fruitPunchJuice="Tangy Tomato Juice"
        group2={require("../assets/ellipse-752.png")}
      />
      <View style={[styles.editAddOnItem, styles.editPosition]} />
      <View style={[styles.editAddOnInner, styles.editPosition]} />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.timeLightPosition]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.westernBbq, styles.drinksTypo]}>
        Western BBQ ... Meal
      </Text>
      <View style={[styles.frameView, styles.frameViewFlexBox]}>
        <View
          style={[styles.vuesaxboldtickCircleParent, styles.frameViewFlexBox]}
        >
          <Image
            style={styles.vuesaxboldtickCircleIcon}
            contentFit="cover"
            source={require("../assets/vuesaxboldtickcircle.png")}
          />
          <Text style={styles.save}>Save</Text>
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.statusIcons}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={styles.wifiSignalLight}
            contentFit="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={styles.batteryLight}
            contentFit="cover"
            source={require("../assets/battery--light.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          contentFit="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={[styles.timeLight, styles.timeLightPosition]}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  basePosition: {
    left: 0,
    right: 0,
    position: "absolute",
  },
  requiredTypo: {
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  drinksTypo: {
    color: Color.dark100,
    textAlign: "left",
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  drinksLayout: {
    lineHeight: 23,
    left: 21,
    letterSpacing: -0.2,
  },
  editPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  timeLightPosition: {
    left: 21,
    position: "absolute",
  },
  frameViewFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    position: "absolute",
    overflow: "hidden",
  },
  editAddOnChild: {
    top: 93,
    backgroundColor: Color.light80,
    height: 81,
  },
  required: {
    top: 125,
    right: 21,
    fontSize: FontSize.caption_size,
    color: Color.systemGreen100,
    textAlign: "right",
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.2,
    fontFamily: FontFamily.body,
  },
  drinks: {
    top: 109,
    fontSize: FontSize.subtitle2_size,
    textAlign: "left",
    lineHeight: 23,
    left: 21,
    letterSpacing: -0.2,
  },
  editJuice: {
    top: 135,
    fontSize: FontSize.body_size,
    color: Color.dark80,
    textAlign: "left",
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  editAddOnItem: {
    backgroundColor: Color.colorGray_200,
    height: 112,
    bottom: 0,
  },
  editAddOnInner: {
    backgroundColor: Color.colorGray_300,
    height: 93,
    top: 0,
  },
  vuesaxlineararrowLeftIcon: {
    top: 45,
    width: 36,
    height: 36,
  },
  westernBbq: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 16,
  },
  vuesaxboldtickCircleIcon: {
    width: 24,
    height: 24,
  },
  save: {
    fontSize: FontSize.button_size,
    lineHeight: 18,
    fontFamily: FontFamily.button,
    color: Color.light100,
    textAlign: "left",
    fontWeight: "500",
  },
  vuesaxboldtickCircleParent: {
    gap: Gap.gap_sm,
  },
  frameView: {
    marginLeft: -174,
    bottom: 30,
    left: "50%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.dark100,
    width: 348,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    top: 0,
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
    height: 14,
  },
  batteryLight: {
    width: 25,
    height: 14,
  },
  statusIcons: {
    top: 16,
    right: 14,
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
    top: 0,
    bottom: 0,
  },
  bar: {
    right: 121,
    bottom: 8,
    left: 120,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    height: 34,
    bottom: 0,
  },
  editAddOn: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default EditAddOn;
