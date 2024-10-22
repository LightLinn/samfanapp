import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent5 from "../components/FrameComponent5";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const RestaurantMenu = () => {
  return (
    <View style={styles.restaurantMenu}>
      <Text style={styles.mcdonalds}>McDonald’s</Text>
      <Text style={styles.bramleaSandalwood}>{`Bramlea & Sandalwood`}</Text>
      <Image
        style={styles.vuesaxlinearlocationIcon}
        contentFit="cover"
        source={require("../assets/vuesaxlinearlocation1.png")}
      />
      <View style={styles.logo}>
        <View style={styles.logoChild} />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </View>
      <FrameComponent1
        frame={require("../assets/frame10.png")}
        classicCheeseBurgerCals="Classic Cheese Burger (400 Cals)"
        prop="$5.89"
        prop1="$4.59"
        vuesaxlineararrowRight={require("../assets/vuesaxlineararrowright1.png")}
      />
      <FrameComponent1
        textTop={414}
        frame={require("../assets/frame11.png")}
        vectorIconWidth={98}
        vectorIconHeight={41}
        classicCheeseBurgerCals="Simply Cheese with Sesame Seed buns"
        prop="$4.89"
        prop1="$3.59"
        vuesaxlineararrowRight={require("../assets/vuesaxlineararrowright1.png")}
      />
      <FrameComponent5 />
      <FrameComponent1
        textTop={628}
        frame={require("../assets/frame12.png")}
        vectorIconWidth={108}
        vectorIconHeight={40}
        classicCheeseBurgerCals="Western BBQ Cheeseburger"
        prop="$5.89"
        prop1="$4.59"
        vuesaxlineararrowRight={require("../assets/vuesaxlineararrowright1.png")}
      />
      <FrameComponent1
        textTop={735}
        frame={require("../assets/frame13.png")}
        vectorIconWidth={108}
        vectorIconHeight={23}
        classicCheeseBurgerCals="Bacon and Veggies Salad"
        prop="$5.89"
        prop1="$4.59"
        vuesaxlineararrowRight={require("../assets/vuesaxlineararrowright2.png")}
      />
      <View
        style={[styles.restaurantMenuChild, styles.lunchDinnerParentLayout]}
      />
      <View
        style={[styles.lunchDinnerParent, styles.lunchDinnerParentPosition]}
      >
        <Text style={styles.lunchDinner}>{`Lunch & Dinner`}</Text>
        <Text style={[styles.breakfastMenu, styles.menuTypo]}>
          Breakfast Menu
        </Text>
        <Text style={[styles.overnightMenu, styles.menuTypo]}>
          Overnight Menu
        </Text>
        <View style={[styles.frameChild, styles.backPosition]} />
      </View>
      <View style={styles.vuesaxboldheartWrapper}>
        <Image
          style={styles.vuesaxboldheartIcon}
          contentFit="cover"
          source={require("../assets/vuesaxboldheart.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.todaysDealsWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.todaysDeals, styles.backTypo]}>
            Today’s Deals
          </Text>
        </View>
        <View style={[styles.burgerMealsWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.burgerMeals, styles.backTypo]}>
            Burger Meals
          </Text>
        </View>
        <View style={[styles.chickenFishWrapper, styles.wrapperFlexBox]}>
          <Text
            style={[styles.burgerMeals, styles.backTypo]}
          >{`Chicken & Fish`}</Text>
        </View>
        <View style={[styles.beveragesWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.burgerMeals, styles.backTypo]}>Beverages</Text>
        </View>
        <View style={[styles.sidesWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.burgerMeals, styles.backTypo]}>Sides</Text>
        </View>
      </View>
      <View
        style={[styles.restaurantMenuItem, styles.lunchDinnerParentPosition]}
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
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <Image
        style={[styles.restaurantMenuInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/frame-113.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition1]}
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
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.basePosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lunchDinnerParentLayout: {
    height: 59,
    top: 181,
  },
  lunchDinnerParentPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  menuTypo: {
    color: Color.dark60,
    lineHeight: 21,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    top: 18,
    textAlign: "left",
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  backPosition: {
    top: 56,
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_sm,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_31xl,
    top: 0,
    position: "absolute",
  },
  backTypo: {
    lineHeight: 16,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.body,
  },
  iconLayout: {
    height: 36,
    width: 36,
    top: 45,
    position: "absolute",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  basePosition1: {
    right: 0,
    left: 0,
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  mcdonalds: {
    top: 110,
    fontSize: 24,
    letterSpacing: -1.2,
    lineHeight: 30,
    textAlign: "left",
    fontFamily: FontFamily.body,
    color: Color.dark100,
    left: 84,
    position: "absolute",
  },
  bramleaSandalwood: {
    top: 140,
    left: 101,
    lineHeight: 23,
    letterSpacing: -0.1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  vuesaxlinearlocationIcon: {
    top: 145,
    width: 13,
    height: 13,
    left: 84,
    position: "absolute",
  },
  logoChild: {
    backgroundColor: Color.colorFirebrick,
    borderRadius: Border.br_31xl,
    left: 0,
    top: 0,
    height: 50,
    width: 50,
    position: "absolute",
  },
  image1Icon: {
    left: 14,
    height: 19,
    width: 22,
    top: 16,
    position: "absolute",
  },
  logo: {
    top: 112,
    height: 50,
    width: 50,
    left: 21,
    position: "absolute",
  },
  restaurantMenuChild: {
    backgroundColor: Color.light80,
    right: 0,
    left: 0,
    position: "absolute",
  },
  lunchDinner: {
    left: 168,
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 21,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    top: 18,
    color: Color.dark100,
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  breakfastMenu: {
    left: 22,
  },
  overnightMenu: {
    right: -40,
  },
  frameChild: {
    right: 102,
    left: 162,
    backgroundColor: Color.dark100,
    height: 3,
  },
  lunchDinnerParent: {
    height: 59,
    top: 181,
  },
  vuesaxboldheartIcon: {
    height: 22,
    width: 22,
  },
  vuesaxboldheartWrapper: {
    bottom: 689,
    left: 319,
    borderRadius: Border.br_81xl,
    padding: Padding.p_lg,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.light80,
    height: 50,
    width: 50,
    position: "absolute",
  },
  todaysDeals: {
    color: Color.light100,
    letterSpacing: -0.1,
  },
  todaysDealsWrapper: {
    backgroundColor: Color.dark90,
    left: 0,
    paddingHorizontal: Padding.p_sm,
  },
  burgerMeals: {
    color: Color.dark801,
    letterSpacing: -0.1,
  },
  burgerMealsWrapper: {
    left: 123,
    backgroundColor: Color.light80,
  },
  chickenFishWrapper: {
    left: 243,
    backgroundColor: Color.light80,
  },
  beveragesWrapper: {
    left: 373,
    backgroundColor: Color.light80,
  },
  sidesWrapper: {
    left: 476,
    backgroundColor: Color.light80,
  },
  frameParent: {
    top: 258,
    width: 369,
    height: 40,
    left: 21,
    position: "absolute",
  },
  restaurantMenuItem: {
    backgroundColor: Color.colorGray_300,
    height: 93,
    top: 0,
  },
  cartIcon: {
    right: 21,
  },
  vuesaxlineararrowLeftIcon: {
    left: 21,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 125,
  },
  back: {
    left: 58,
    top: 56,
    position: "absolute",
    color: Color.dark100,
    lineHeight: 16,
  },
  restaurantMenuInner: {
    right: 73,
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    top: 0,
    position: "absolute",
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
    right: 14,
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
    top: 16,
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
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    top: 0,
    position: "absolute",
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
    right: 0,
    left: 0,
    top: 0,
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
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  restaurantMenu: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default RestaurantMenu;
