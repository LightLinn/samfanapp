import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const MealCollapsed = () => {
  return (
    <View style={styles.mealCollapsed}>
      <View style={[styles.mealCollapsedChild, styles.mealPosition]} />
      <View style={[styles.mealCollapsedItem, styles.mealPosition]} />
      <Text style={[styles.required, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.required1, styles.requiredTypo]}>REQUIRED</Text>
      <View style={[styles.mealCollapsedInner, styles.mealPosition]} />
      <Text style={styles.westernBbqCheeseburger}>
        Western BBQ Cheeseburger Meal
      </Text>
      <View style={[styles.calsParent, styles.calsParentFlexBox]}>
        <Text style={styles.cals}>340-400 Cals</Text>
        <Image
          style={styles.vuesaxlinearinfoCircleIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearinfocircle.png")}
        />
      </View>
      <Text style={[styles.sideItem, styles.drinksTypo]}>Side Item</Text>
      <Text style={[styles.drinks, styles.drinksTypo]}>Drinks</Text>
      <Text style={[styles.editCheeseburger, styles.drinksTypo]}>
        Edit Cheeseburger
      </Text>
      <Image
        style={[styles.vuesaxlinearaddIcon, styles.vuesaxlinearaddIconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearadd.png")}
      />
      <Image
        style={[styles.vuesaxlinearaddIcon1, styles.vuesaxlinearaddIconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearadd.png")}
      />
      <Image
        style={[styles.vuesaxlinearaddIcon2, styles.vuesaxlinearaddIconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearadd.png")}
      />
      <View style={styles.frameParent}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame15.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/rectangle5.png")}
        />
        <Image
          style={styles.frameIcon1}
          contentFit="cover"
          source={require("../assets/frame16.png")}
        />
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.mealCollapsedChild1, styles.rectangleViewPosition]}
      />
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cart.png")}
      />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Image
        style={[styles.vuesaxlinearmoreSquareIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearmoresquare.png")}
      />
      <Text style={styles.back}>Back</Text>
      <View style={[styles.vuesaxboldheartWrapper, styles.frameGroupPosition]}>
        <Image
          style={styles.vuesaxboldheartIcon}
          contentFit="cover"
          source={require("../assets/vuesaxboldheart1.png")}
        />
      </View>
      <View style={[styles.frameGroup, styles.frameGroupPosition]}>
        <View style={styles.vuesaxboldbagHappyParent}>
          <Image
            style={styles.vuesaxboldbagHappyIcon}
            contentFit="cover"
            source={require("../assets/vuesaxboldbaghappy.png")}
          />
          <Text style={[styles.addToBag, styles.textTypo]}>Add to Bag</Text>
        </View>
        <Text style={[styles.text, styles.textTypo]}>$6.69</Text>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.calsParentFlexBox]}>
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
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.iconPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealPosition: {
    height: 56,
    backgroundColor: Color.light80,
    left: 0,
    right: 0,
    position: "absolute",
  },
  requiredTypo: {
    color: Color.systemGreen100,
    fontFamily: FontFamily.body,
    lineHeight: 16,
    letterSpacing: 0.2,
    fontSize: FontSize.caption_size,
    right: 61,
    textAlign: "right",
    fontWeight: "500",
    position: "absolute",
  },
  calsParentFlexBox: {
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  drinksTypo: {
    color: Color.labelColorLightPrimary,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.subtitle2_size,
    textAlign: "left",
    left: 21,
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  vuesaxlinearaddIconLayout: {
    height: 28,
    width: 28,
    borderRadius: Border.br_81xl,
    right: 21,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 36,
    width: 36,
    top: 45,
    position: "absolute",
  },
  frameGroupPosition: {
    borderRadius: Border.br_lg,
    bottom: 30,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.button,
    lineHeight: 18,
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    position: "absolute",
    overflow: "hidden",
  },
  mealCollapsedChild: {
    top: 450,
  },
  mealCollapsedItem: {
    top: 511,
  },
  required: {
    top: 470,
    textAlign: "right",
  },
  required1: {
    top: 531,
    textAlign: "right",
  },
  mealCollapsedInner: {
    top: 572,
  },
  westernBbqCheeseburger: {
    top: 316,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    width: 293,
    textAlign: "left",
    color: Color.dark100,
    left: 21,
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  cals: {
    letterSpacing: -0.3,
    color: Color.dark60,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.body,
    fontWeight: "500",
  },
  vuesaxlinearinfoCircleIcon: {
    width: 19,
    height: 19,
  },
  calsParent: {
    top: 406,
    left: 21,
  },
  sideItem: {
    top: 466,
  },
  drinks: {
    top: 527,
  },
  editCheeseburger: {
    top: 588,
  },
  vuesaxlinearaddIcon: {
    top: 463,
  },
  vuesaxlinearaddIcon1: {
    top: 524,
  },
  vuesaxlinearaddIcon2: {
    top: 586,
  },
  frameIcon: {
    left: 189,
    width: 249,
    height: 191,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 53,
    width: 365,
    height: 134,
  },
  frameIcon1: {
    top: 124,
    left: 115,
    width: 220,
    height: 74,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent: {
    top: 112,
    left: 22,
    width: 438,
    height: 198,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorGray_200,
    height: 112,
    bottom: 0,
  },
  mealCollapsedChild1: {
    backgroundColor: Color.colorGray_300,
    height: 93,
    top: 0,
  },
  cartIcon: {
    right: 21,
    height: 36,
    width: 36,
    top: 45,
  },
  vuesaxlineararrowLeftIcon: {
    left: 21,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 78,
  },
  back: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    fontWeight: "500",
    lineHeight: 16,
    position: "absolute",
  },
  vuesaxboldheartIcon: {
    width: 27,
    height: 27,
  },
  vuesaxboldheartWrapper: {
    width: 62,
    height: 62,
    padding: Padding.p_lg,
    left: 21,
    backgroundColor: Color.light80,
    bottom: 30,
  },
  vuesaxboldbagHappyIcon: {
    width: 21,
    height: 21,
  },
  addToBag: {
    fontSize: FontSize.button_size,
    color: Color.light100,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.button,
    flex: 1,
  },
  vuesaxboldbagHappyParent: {
    width: 158,
    gap: Gap.gap_md,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.blue100,
    width: 56,
    textAlign: "right",
  },
  frameGroup: {
    left: 101,
    backgroundColor: Color.dark100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xl,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_2xl,
    gap: Gap.gap_2xl,
    alignItems: "center",
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    top: 0,
    right: 0,
    left: 0,
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
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    top: 0,
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
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
  mealCollapsed: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default MealCollapsed;
