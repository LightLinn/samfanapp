import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  Gap,
  FontSize,
  FontFamily,
  Padding,
  Border,
} from "../GlobalStyles";

const MealFull = () => {
  return (
    <View style={styles.mealFull}>
      <View style={[styles.mealFullChild, styles.mealPosition]} />
      <View style={[styles.mealFullItem, styles.mealPosition]} />
      <Image
        style={[
          styles.vuesaxlinearminusIcon,
          styles.vuesaxlinearminusIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearminus.png")}
      />
      <Image
        style={[
          styles.vuesaxlinearminusIcon1,
          styles.vuesaxlinearminusIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearminus.png")}
      />
      <View style={[styles.mealFullInner, styles.mealPosition]} />
      <Text style={styles.westernBbqCheeseburger}>
        Western BBQ Cheeseburger Meal
      </Text>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.softDrinksWrapper, styles.mealInnerFlexBox]}>
          <Text style={[styles.softDrinks, styles.beefPattyTypo]}>
            Soft Drinks
          </Text>
        </View>
        <Image
          style={styles.vuesaxlinearminusIconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-752.png")}
        />
      </View>
      <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle6.png")}
            />
          </View>
          <Text style={[styles.softDrinks, styles.beefPattyTypo]}>
            Medium Fries
          </Text>
        </View>
        <Image
          style={styles.vuesaxlinearminusIconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-752.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameParentFlexBox]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <Image
            style={[styles.frameIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/frame17.png")}
          />
          <Text style={[styles.softDrinks, styles.beefPattyTypo]}>
            Sesame Seed Bun
          </Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Text style={[styles.edit, styles.editLayout]}>Edit</Text>
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright2.png")}
          />
        </View>
      </View>
      <View style={[styles.mealFullInner1, styles.frameParentPosition]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <Image
            style={styles.frameIcon1}
            contentFit="cover"
            source={require("../assets/frame18.png")}
          />
          <Text style={[styles.softDrinks, styles.beefPattyTypo]}>
            Sesame Seed Bun
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <Image
            style={styles.frameIcon2}
            contentFit="cover"
            source={require("../assets/frame19.png")}
          />
          <View style={styles.beefPattyParent}>
            <Text style={[styles.beefPatty, styles.eaFlexBox]}>Beef Patty</Text>
            <Text style={[styles.ea, styles.eaTypo]}>$1.59 ea</Text>
          </View>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent5, styles.frameParentFlexBox]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <View style={styles.frame1}>
            <Image
              style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
              contentFit="cover"
              source={require("../assets/rectangle7.png")}
            />
          </View>
          <View style={styles.beefPattyParent}>
            <Text style={[styles.beefPatty, styles.eaFlexBox]}>Cheese</Text>
            <Text style={[styles.ea, styles.eaTypo]}>$0.59 ea</Text>
          </View>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent7, styles.frameParentFlexBox]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
              contentFit="cover"
              source={require("../assets/rectangle8.png")}
            />
          </View>
          <Text style={[styles.softDrinks, styles.beefPattyTypo]}>
            Banana Peppers
          </Text>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <Image
            style={styles.frameIcon3}
            contentFit="cover"
            source={require("../assets/frame20.png")}
          />
          <Text style={[styles.softDrinks, styles.beefPattyTypo]}>Lettuce</Text>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent11, styles.frameParentFlexBox]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle6.png")}
            />
          </View>
          <Text style={[styles.softDrinks, styles.beefPattyTypo]}>
            Chipotle Sauce
          </Text>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent13, styles.frameParentFlexBox]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <View style={styles.frame}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle6.png")}
            />
          </View>
          <Text style={[styles.softDrinks, styles.beefPattyTypo]}>
            BBQ Sauce
          </Text>
        </View>
        <View style={[styles.button, styles.frameParentFlexBox]}>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearminus1.png")}
            />
          </View>
          <Text style={[styles.text, styles.editLayout]}>1</Text>
          <View style={[styles.button1, styles.mealInnerFlexBox]}>
            <Image
              style={styles.vuesaxlinearminusIcon2}
              contentFit="cover"
              source={require("../assets/vuesaxlinearadd1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.mealFullInner2, styles.frameParentPosition]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <Text style={[styles.softDrinks, styles.beefPattyTypo]}>Juices</Text>
          <Image
            style={styles.vuesaxlinearminusIconLayout}
            contentFit="cover"
            source={require("../assets/group-21.png")}
          />
        </View>
      </View>
      <View style={[styles.mealFullInner3, styles.frameParentPosition]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
            <Image
              style={[styles.frameIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/frame21.png")}
            />
            <Text style={[styles.largeFries, styles.beefPattyTypo]}>
              Large Fries
            </Text>
          </View>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text6, styles.eaTypo]}>+$2.99</Text>
            <Image
              style={styles.vuesaxlinearminusIconLayout}
              contentFit="cover"
              source={require("../assets/group-21.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.calories}>
        <View style={[styles.calsParent, styles.calsParentFlexBox]}>
          <Text style={styles.cals}>340-400 Cals</Text>
          <Image
            style={styles.vuesaxlinearinfoCircleIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlinearinfocircle1.png")}
          />
        </View>
      </View>
      <Text style={[styles.sideItem, styles.drinksTypo]}>Side Item</Text>
      <Text style={[styles.required, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.required1, styles.requiredTypo]}>REQUIRED</Text>
      <Text style={[styles.drinks, styles.drinksTypo]}>Drinks</Text>
      <Text style={[styles.editCheeseburger, styles.drinksTypo]}>
        Edit Cheeseburger
      </Text>
      <View style={[styles.mealFullInner4, styles.mealInnerFlexBox]}>
        <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
          <View style={[styles.frameContainer, styles.mealInnerFlexBox]}>
            <Image
              style={styles.frameIcon5}
              contentFit="cover"
              source={require("../assets/frame22.png")}
            />
            <Text style={[styles.softDrinks, styles.beefPattyTypo]}>
              Fruit Punch Juice
            </Text>
          </View>
          <View style={styles.parentFlexBox}>
            <Text style={[styles.edit, styles.editLayout]}>Edit</Text>
            <Image
              style={styles.vuesaxlineararrowRightIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowright1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.frameParent19}>
        <Image
          style={styles.frameIcon6}
          contentFit="cover"
          source={require("../assets/frame15.png")}
        />
        <Image
          style={styles.rectangleIcon5}
          contentFit="cover"
          source={require("../assets/rectangle5.png")}
        />
        <Image
          style={styles.frameIcon7}
          contentFit="cover"
          source={require("../assets/frame16.png")}
        />
      </View>
      <Image
        style={[
          styles.vuesaxlinearminusIcon8,
          styles.vuesaxlinearminusIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearminus.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.vuesaxboldheartWrapper, styles.frameParent20Position]}
      >
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          contentFit="cover"
          source={require("../assets/vuesaxboldheart2.png")}
        />
      </View>
      <View style={[styles.frameParent20, styles.frameParent20Position]}>
        <View
          style={[styles.vuesaxboldbagHappyParent, styles.mealInnerFlexBox]}
        >
          <Image
            style={styles.vuesaxboldbagHappyIcon}
            contentFit="cover"
            source={require("../assets/vuesaxboldbaghappy.png")}
          />
          <Text style={[styles.addToBag, styles.text7Typo]}>Add to Bag</Text>
        </View>
        <Text style={[styles.text7, styles.text7Typo]}>$8.69</Text>
      </View>
      <View style={[styles.mealFullChild1, styles.rectangleViewPosition]} />
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/cart.png")}
      />
      <Image
        style={[styles.vuesaxlinearmoreSquareIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearmoresquare.png")}
      />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowleft1.png")}
      />
      <Text style={[styles.back, styles.editLayout]}>Back</Text>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconLayout1]}
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
          <View style={styles.base} />
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
  vuesaxlinearminusIconLayout: {
    height: 28,
    width: 28,
  },
  frameParentFlexBox: {
    gap: Gap.gap_2xl,
    alignItems: "center",
    flexDirection: "row",
  },
  mealInnerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  beefPattyTypo: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    color: Color.dark100,
    fontFamily: FontFamily.body,
  },
  iconLayout1: {
    height: 30,
    overflow: "hidden",
  },
  editLayout: {
    lineHeight: 16,
    color: Color.dark100,
    fontFamily: FontFamily.body,
  },
  frameParentPosition: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  eaFlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  eaTypo: {
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.body,
  },
  rectangleIconPosition: {
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  calsParentFlexBox: {
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  drinksTypo: {
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.subtitle2_size,
    lineHeight: 23,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.body,
    left: 21,
    position: "absolute",
  },
  requiredTypo: {
    color: Color.systemGreen100,
    letterSpacing: 0.2,
    fontSize: FontSize.caption_size,
    right: 61,
    textAlign: "right",
    fontWeight: "500",
    lineHeight: 16,
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  rectangleViewPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  frameParent20Position: {
    borderRadius: Border.br_lg,
    bottom: 30,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text7Typo: {
    fontFamily: FontFamily.button,
    lineHeight: 18,
    flex: 1,
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
    position: "absolute",
    overflow: "hidden",
  },
  mealFullChild: {
    top: 450,
  },
  mealFullItem: {
    top: 642,
  },
  vuesaxlinearminusIcon: {
    top: 655,
    borderRadius: Border.br_81xl,
    width: 28,
    right: 21,
    position: "absolute",
  },
  vuesaxlinearminusIcon1: {
    top: 463,
    borderRadius: Border.br_81xl,
    width: 28,
    right: 21,
    position: "absolute",
  },
  mealFullInner: {
    top: 907,
  },
  westernBbqCheeseburger: {
    top: 316,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    width: 293,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    left: 21,
    position: "absolute",
  },
  softDrinks: {
    textAlign: "left",
    flex: 1,
  },
  softDrinksWrapper: {
    flex: 1,
  },
  frameParent: {
    top: 704,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon: {
    height: "90%",
    width: "89.13%",
    top: "10%",
    right: "5.43%",
    left: "5.43%",
    maxHeight: "100%",
    bottom: "0%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    height: 20,
    width: 92,
    overflow: "hidden",
  },
  frameContainer: {
    gap: Gap.gap_2xs,
    flex: 1,
  },
  frameGroup: {
    top: 512,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon: {
    width: 92,
  },
  edit: {
    textAlign: "right",
    fontWeight: "500",
    letterSpacing: -0.3,
    lineHeight: 16,
    fontSize: FontSize.size_sm,
  },
  vuesaxlineararrowRightIcon: {
    width: 24,
    height: 24,
  },
  frameView: {
    top: 969,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon1: {
    height: 32,
    width: 92,
    overflow: "hidden",
  },
  mealFullInner1: {
    top: 1397,
    alignItems: "center",
    flexDirection: "row",
  },
  frameIcon2: {
    height: 34,
    width: 92,
    overflow: "hidden",
  },
  beefPatty: {
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    color: Color.dark100,
    fontFamily: FontFamily.body,
  },
  ea: {
    lineHeight: 19,
    color: Color.peach100,
    alignSelf: "stretch",
    textAlign: "left",
  },
  beefPattyParent: {
    flex: 1,
  },
  vuesaxlinearminusIcon2: {
    width: 20,
    height: 20,
  },
  button1: {
    borderRadius: Border.br_161xl,
    backgroundColor: Color.dark801,
    width: 32,
    padding: Padding.p_7xs,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    letterSpacing: -0.3,
    lineHeight: 16,
    fontSize: FontSize.body_size,
  },
  button: {
    borderRadius: Border.br_31xl,
    justifyContent: "center",
  },
  frameParent3: {
    top: 1087,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon1: {
    width: "86.74%",
    right: "8.91%",
    left: "4.35%",
  },
  frame1: {
    height: 16,
    width: 92,
    overflow: "hidden",
  },
  frameParent5: {
    top: 1147,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  rectangleIcon2: {
    width: "76.52%",
    right: "20.22%",
    left: "3.26%",
  },
  frameParent7: {
    top: 1217,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameIcon3: {
    height: 14,
    width: 92,
    overflow: "hidden",
  },
  frameParent9: {
    top: 1277,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameParent11: {
    top: 1337,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  frameParent13: {
    top: 1027,
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    left: 0,
    right: 0,
    position: "absolute",
  },
  mealFullInner2: {
    top: 760,
    alignItems: "center",
    flexDirection: "row",
  },
  largeFries: {
    width: 224,
    textAlign: "left",
  },
  text6: {
    lineHeight: 22,
    color: Color.colorDarkslategray_100,
    textAlign: "right",
  },
  parent: {
    width: 89,
    gap: Gap.gap_xl,
  },
  mealFullInner3: {
    top: 568,
    alignItems: "center",
    flexDirection: "row",
  },
  cals: {
    opacity: 0.34,
    lineHeight: 18,
    fontWeight: "500",
    letterSpacing: -0.3,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.body,
  },
  vuesaxlinearinfoCircleIcon: {
    width: 19,
    height: 19,
  },
  calsParent: {
    top: 0,
    left: 0,
  },
  calories: {
    top: 406,
    width: 111,
    height: 19,
    left: 21,
    position: "absolute",
  },
  sideItem: {
    top: 466,
  },
  required: {
    top: 470,
  },
  required1: {
    top: 662,
  },
  drinks: {
    top: 658,
  },
  editCheeseburger: {
    top: 923,
  },
  frameIcon5: {
    width: 38,
    height: 33,
    overflow: "hidden",
  },
  mealFullInner4: {
    top: 814,
    right: 16,
    left: 16,
    borderRadius: Border.br_sm,
    borderStyle: "solid",
    borderColor: Color.dark60,
    borderWidth: 1,
    paddingLeft: Padding.p_2xl,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_xl,
    paddingTop: Padding.p_xl,
    position: "absolute",
    backgroundColor: Color.light100,
  },
  frameIcon6: {
    left: 189,
    width: 249,
    height: 191,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon5: {
    top: 53,
    width: 365,
    height: 134,
    left: 0,
    position: "absolute",
  },
  frameIcon7: {
    top: 124,
    left: 115,
    width: 220,
    height: 74,
    position: "absolute",
    overflow: "hidden",
  },
  frameParent19: {
    top: 112,
    left: 22,
    width: 438,
    height: 198,
    position: "absolute",
  },
  vuesaxlinearminusIcon8: {
    top: 921,
    borderRadius: Border.br_81xl,
    width: 28,
    right: 21,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorGray_200,
    height: 112,
    bottom: 0,
  },
  vuesaxboldheartWrapper: {
    backgroundColor: "rgba(244, 115, 158, 0.3)",
    padding: 19,
    justifyContent: "center",
    left: 21,
  },
  vuesaxboldbagHappyIcon: {
    width: 21,
    height: 21,
  },
  addToBag: {
    fontSize: FontSize.button_size,
    color: Color.light100,
    fontWeight: "500",
    textAlign: "left",
  },
  vuesaxboldbagHappyParent: {
    width: 158,
    gap: Gap.gap_md,
  },
  text7: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    color: Color.blue100,
    textAlign: "right",
  },
  frameParent20: {
    marginLeft: -94,
    left: "50%",
    backgroundColor: Color.dark100,
    width: 268,
    paddingHorizontal: Padding.p_3xl,
    paddingBottom: Padding.p_2xl,
    paddingTop: Padding.p_xl,
  },
  mealFullChild1: {
    backgroundColor: Color.colorGray_300,
    height: 93,
    top: 0,
  },
  cartIcon: {
    right: 21,
    width: 36,
    top: 45,
  },
  vuesaxlinearmoreSquareIcon: {
    right: 78,
  },
  vuesaxlineararrowLeftIcon: {
    left: 21,
  },
  back: {
    top: 56,
    left: 58,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  notchIcon: {
    top: 0,
    maxWidth: "100%",
    height: 30,
    left: 0,
    right: 0,
    position: "absolute",
  },
  networkSignalLight: {
    height: 14,
    width: 20,
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
    left: 0,
    right: 0,
    position: "absolute",
  },
  bar: {
    right: 121,
    bottom: 8,
    left: 120,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 0,
    height: 34,
  },
  mealFull: {
    borderRadius: Border.br_27xl,
    width: "100%",
    height: 1606,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.light100,
  },
});

export default MealFull;
