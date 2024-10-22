import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import {
  FontSize,
  Color,
  FontFamily,
  Border,
  Gap,
  Padding,
} from "../GlobalStyles";

const Homepage = () => {
  return (
    <View style={styles.homepage}>
      <Text style={styles.goodEveningLuisa}>Good Evening Luisa</Text>
      <Text style={[styles.categories, styles.categoriesTypo]}>Categories</Text>
      <Text style={[styles.offersNearYou, styles.categoriesTypo]}>
        Offers Near you
      </Text>
      <Image
        style={[styles.homepageChild, styles.homepageLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-1166.png")}
      />
      <Image
        style={[styles.homepageItem, styles.homepageLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-1166.png")}
      />
      <Text
        style={[styles.newTrending, styles.categoriesTypo]}
      >{`New & Trending`}</Text>
      <View style={[styles.vuesaxlinearlocationParent, styles.parentFlexBox1]}>
        <Image
          style={styles.vuesaxlinearlocationIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearlocation.png")}
        />
        <Text style={[styles.kingstonLn, styles.kingstonLnTypo]}>
          32, Kingston Ln.
        </Text>
      </View>
      <View style={[styles.vuesaxlinearclockParent, styles.parentFlexBox1]}>
        <Image
          style={styles.vuesaxlinearclockIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearclock.png")}
        />
        <Text style={[styles.kingstonLn, styles.kingstonLnTypo]}>
          Order Now
        </Text>
      </View>
      <Image
        style={[styles.homepageInner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <Text style={[styles.burgers, styles.seeAllTypo]}>Burgers</Text>
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame6.png")}
      />
      <Image
        style={[styles.homepageChild1, styles.homepageChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-758.png")}
      />
      <Image
        style={[styles.homepageChild2, styles.homepageChildLayout2]}
        contentFit="cover"
        source={require("../assets/ellipse-758.png")}
      />
      <Text style={[styles.utensils, styles.groceryTypo]}>Utensils</Text>
      <Image
        style={styles.frameIcon2}
        contentFit="cover"
        source={require("../assets/frame7.png")}
      />
      <Image
        style={[styles.homepageChild3, styles.homepageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-757.png")}
      />
      <Text style={[styles.grocery, styles.groceryTypo]}>Grocery</Text>
      <Image
        style={[styles.homepageChild4, styles.homepageChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-762.png")}
      />
      <Text style={[styles.seeAll, styles.seeAllTypo]}>See all</Text>
      <Image
        style={[styles.vuesaxlineararrowRightIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowright.png")}
      />
      <Image
        style={styles.frameIcon3}
        contentFit="cover"
        source={require("../assets/frame8.png")}
      />
      <Text style={[styles.salads, styles.seeAllTypo]}>Salads</Text>
      <Text style={[styles.sweets, styles.seeAllTypo]}>Sweets</Text>
      <Image
        style={styles.frameIcon4}
        contentFit="cover"
        source={require("../assets/frame9.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.homepageChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={[styles.homepageChild5, styles.homepageChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={[styles.homepageChild6, styles.homepageChildLayout]}
        contentFit="cover"
        source={require("../assets/vector-5.png")}
      />
      <View style={[styles.restaurants, styles.homepageChildLayout]}>
        <Image
          style={[styles.restaurantsChild, styles.restaurantsLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11661.png")}
        />
        <Image
          style={[styles.restaurantsItem, styles.restaurantsLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1167.png")}
        />
        <Image
          style={[styles.restaurantsInner, styles.restaurantsLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1167.png")}
        />
        <Image
          style={[styles.restaurantsInner, styles.restaurantsLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1169.png")}
        />
        <View style={[styles.logoParent, styles.logoPosition]}>
          <View style={styles.logoLayout}>
            <View style={[styles.logoChild, styles.logoLayout]} />
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-1.png")}
            />
          </View>
          <View style={styles.harveysParent}>
            <Text style={[styles.harveys, styles.miFlexBox]}>Harvey’s</Text>
            <Text style={[styles.mi, styles.miFlexBox]}>2.1 mi</Text>
          </View>
        </View>
        <View style={[styles.logoGroup, styles.logoPosition]}>
          <Image
            style={styles.logoLayout}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
          <View style={styles.harveysParent}>
            <Text style={[styles.harveys, styles.miFlexBox]}>KFC</Text>
            <Text style={[styles.mi, styles.miFlexBox]}>1.3 mi</Text>
          </View>
        </View>
        <View style={[styles.logoContainer, styles.logoPosition]}>
          <View style={styles.logoLayout}>
            <View style={[styles.logoItem, styles.logoLayout]} />
            <Image
              style={[styles.image1Icon1, styles.image1Icon1Layout]}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
          </View>
          <View style={styles.harveysParent}>
            <Text style={[styles.harveys, styles.miFlexBox]}>McDonald’s</Text>
            <Text style={[styles.mi, styles.miFlexBox]}>2.0 mi</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.vuesaxlinearsearchNormalParent, styles.parentFlexBox]}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vuesaxlinearsearchnormal.png")}
        />
        <Text style={[styles.searchFoodRestaurants, styles.kingstonLnTypo]}>
          Search Food, Restaurants etc.
        </Text>
      </View>
      <View style={[styles.newWrapper, styles.newWrapperFlexBox]}>
        <Text style={[styles.new, styles.newTypo]}>NEW</Text>
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.newWrapperFlexBox}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vuesaxboldhome2.png")}
          />
          <Text style={[styles.home, styles.newTypo]}>Home</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-768.png")}
          />
        </View>
        <View style={styles.newWrapperFlexBox}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vuesaxlineardiscover.png")}
          />
          <Text style={[styles.discover, styles.newTypo]}>Discover</Text>
        </View>
        <View style={styles.vuesaxlinearcarParent}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vuesaxlinearcar.png")}
          />
          <Text style={[styles.discover, styles.newTypo]}>Drivethru</Text>
        </View>
        <View style={styles.newWrapperFlexBox}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vuesaxlinearreceipt.png")}
          />
          <Text style={[styles.discover, styles.newTypo]}>Orders</Text>
        </View>
        <View style={styles.newWrapperFlexBox}>
          <Image
            style={[styles.frameItem, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-1156.png")}
          />
          <Text style={[styles.discover, styles.newTypo]}>Profile</Text>
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.parentFlexBox1]}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.image1Icon1Layout]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light1.png")}
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
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesTypo: {
    lineHeight: 24,
    letterSpacing: -0.2,
    fontSize: FontSize.subtitle2_size,
    fontWeight: "500",
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    left: 21,
    position: "absolute",
  },
  homepageLayout: {
    height: 181,
    width: 315,
    borderRadius: Border.br_5xs,
    top: 592,
    position: "absolute",
  },
  parentFlexBox1: {
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  kingstonLnTypo: {
    fontSize: FontSize.body_size,
    lineHeight: 23,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.body,
  },
  ellipseIconLayout: {
    height: 103,
    width: 103,
    left: 21,
    position: "absolute",
  },
  seeAllTypo: {
    textAlign: "center",
    lineHeight: 18,
    fontWeight: "500",
    position: "absolute",
  },
  homepageChildLayout2: {
    width: 104,
    left: 143,
    height: 103,
    position: "absolute",
  },
  groceryTypo: {
    left: 166,
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  homepageChildPosition: {
    left: 266,
    height: 103,
    width: 103,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  homepageChildLayout: {
    width: 390,
    left: 0,
  },
  restaurantsLayout: {
    height: 113,
    width: 202,
    top: 0,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  logoPosition: {
    gap: Gap.gap_lg,
    width: 175,
    top: 121,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  logoLayout: {
    height: 36,
    width: 36,
  },
  miFlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.body,
  },
  image1Icon1Layout: {
    width: 16,
    height: 14,
  },
  parentFlexBox: {
    backgroundColor: Color.light80,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  newWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  newTypo: {
    fontSize: FontSize.caption_size,
    textAlign: "center",
    fontFamily: FontFamily.body,
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    position: "absolute",
    overflow: "hidden",
  },
  basePosition: {
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  goodEveningLuisa: {
    top: 124,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    textAlign: "left",
    fontFamily: FontFamily.body,
    color: Color.dark100,
    left: 21,
    position: "absolute",
  },
  categories: {
    top: 252,
    fontWeight: "500",
  },
  offersNearYou: {
    top: 554,
    fontWeight: "500",
  },
  homepageChild: {
    left: 21,
  },
  homepageItem: {
    left: 352,
  },
  newTrending: {
    top: 815,
    fontWeight: "500",
  },
  vuesaxlinearlocationIcon: {
    width: 19,
    height: 19,
  },
  kingstonLn: {
    color: Color.peach100,
    lineHeight: 23,
  },
  vuesaxlinearlocationParent: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.colorAntiquewhite,
    borderRadius: Border.br_xs,
    top: 60,
    gap: Gap.gap_xs,
    justifyContent: "center",
    left: 21,
  },
  vuesaxlinearclockIcon: {
    height: 20,
    width: 20,
  },
  vuesaxlinearclockParent: {
    left: 195,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    backgroundColor: Color.colorAntiquewhite,
    borderRadius: Border.br_xs,
    top: 60,
    gap: Gap.gap_xs,
    justifyContent: "center",
  },
  homepageInner: {
    top: 290,
  },
  frameIcon: {
    top: 320,
    left: 34,
    width: 90,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIcon: {
    top: 409,
  },
  burgers: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    left: 44,
    top: 359,
  },
  frameIcon1: {
    top: 426,
    width: 77,
    height: 47,
    left: 44,
    position: "absolute",
    overflow: "hidden",
  },
  homepageChild1: {
    top: 290,
  },
  homepageChild2: {
    top: 409,
  },
  utensils: {
    top: 478,
  },
  frameIcon2: {
    top: 421,
    left: 170,
    width: 72,
    height: 58,
    position: "absolute",
    overflow: "hidden",
  },
  homepageChild3: {
    top: 290,
  },
  grocery: {
    top: 359,
  },
  homepageChild4: {
    top: 409,
  },
  seeAll: {
    top: 461,
    left: 290,
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.button,
    color: Color.blue100,
  },
  vuesaxlineararrowRightIcon: {
    top: 436,
    left: 305,
    position: "absolute",
  },
  frameIcon3: {
    top: 304,
    left: 174,
    width: 56,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  salads: {
    left: 293,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    top: 359,
  },
  sweets: {
    left: 45,
    top: 478,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.dark100,
    fontFamily: FontFamily.body,
  },
  frameIcon4: {
    top: 319,
    left: 291,
    width: 69,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    top: 533,
    maxHeight: "100%",
    width: 390,
    position: "absolute",
  },
  homepageChild5: {
    top: 794,
    maxHeight: "100%",
    width: 390,
    position: "absolute",
  },
  homepageChild6: {
    top: 1032,
    maxHeight: "100%",
    width: 390,
    position: "absolute",
  },
  restaurantsChild: {
    left: 21,
  },
  restaurantsItem: {
    left: 241,
  },
  restaurantsInner: {
    left: 461,
  },
  logoChild: {
    backgroundColor: "rgba(132, 146, 173, 0.1)",
    borderRadius: Border.br_31xl,
    top: 0,
    left: 0,
    width: 36,
    position: "absolute",
  },
  image1Icon: {
    top: 9,
    left: 6,
    height: 17,
    width: 25,
    position: "absolute",
  },
  harveys: {
    lineHeight: 18,
    alignSelf: "stretch",
    fontSize: FontSize.body_size,
    fontWeight: "500",
    letterSpacing: -0.2,
    color: Color.dark100,
  },
  mi: {
    fontSize: FontSize.size_smi,
    lineHeight: 19,
    color: Color.colorDarkslategray_100,
    letterSpacing: -0.1,
  },
  harveysParent: {
    flex: 1,
  },
  logoParent: {
    left: 21,
  },
  logoGroup: {
    left: 241,
  },
  logoItem: {
    backgroundColor: Color.colorFirebrick,
    borderRadius: Border.br_31xl,
    top: 0,
    left: 0,
    width: 36,
    position: "absolute",
  },
  image1Icon1: {
    top: 11,
    left: 10,
    height: 14,
    position: "absolute",
  },
  logoContainer: {
    left: 461,
  },
  restaurants: {
    top: 853,
    height: 158,
    position: "absolute",
  },
  searchFoodRestaurants: {
    color: Color.dark60,
    lineHeight: 23,
    flex: 1,
  },
  vuesaxlinearsearchNormalParent: {
    top: 178,
    borderRadius: Border.br_sm,
    width: 348,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    gap: Gap.gap_2xl,
    left: 21,
  },
  new: {
    lineHeight: 16,
    color: Color.light100,
    fontWeight: "500",
  },
  newWrapper: {
    top: 404,
    left: 216,
    borderTopLeftRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    borderBottomRightRadius: Border.br_sm,
    backgroundColor: Color.peach100,
    width: 42,
    padding: 7,
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  home: {
    letterSpacing: -0.1,
    lineHeight: 23,
    fontWeight: "500",
    color: Color.dark100,
    fontSize: FontSize.caption_size,
  },
  frameChild: {
    width: 5,
    height: 5,
  },
  discover: {
    letterSpacing: -0.1,
    lineHeight: 23,
    color: Color.dark100,
    fontSize: FontSize.caption_size,
  },
  vuesaxlinearcarParent: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameItem: {
    borderRadius: Border.br_31xl,
  },
  frameParent: {
    justifyContent: "space-between",
    paddingHorizontal: 28,
    paddingTop: Padding.p_base,
    paddingBottom: 32,
    bottom: 0,
    width: 390,
    left: 0,
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    overflow: "hidden",
  },
  networkSignalLight: {
    height: 14,
    width: 20,
  },
  wifiSignalLight: {
    height: 14,
  },
  batteryLight: {
    height: 14,
    width: 25,
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
  homepage: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    width: "100%",
    height: 1153,
    overflow: "hidden",
    flex: 1,
  },
});

export default Homepage;
