import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <Text style={[styles.search1, styles.backFlexBox]}>Search</Text>
      <View
        style={[styles.vuesaxlinearsearchNormalParent, styles.parentFlexBox]}
      >
        <Image
          style={styles.vuesaxlinearsearchNormalIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearsearchnormal.png")}
        />
        <Text
          style={[styles.searchFoodRestaurants, styles.bbqChickenBurgerTypo]}
        >
          Search Food, Restaurants etc.
        </Text>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.dictationIcon}
            contentFit="cover"
            source={require("../assets/dictation.png")}
          />
          <Image
            style={styles.emojiIcon}
            contentFit="cover"
            source={require("../assets/emoji.png")}
          />
          <View style={[styles.return, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle2.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={[styles.rectangleIcon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle3.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={styles.keyLight}>
              <Image
                style={[styles.rectangleIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle4.png")}
              />
              <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              contentFit="cover"
              source={require("../assets/delete-button.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <View style={styles.keyLight}>
              <View style={styles.rectangleShadowBox} />
              <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/shift.png")}
            />
          </View>
          <View style={[styles.m, styles.mPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
          </View>
          <View style={[styles.n, styles.nPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
          </View>
          <View style={[styles.b, styles.bPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
          </View>
          <View style={[styles.v, styles.vPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
          </View>
          <View style={[styles.c, styles.cPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
          </View>
          <View style={[styles.x, styles.xPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>X</Text>
          </View>
          <View style={[styles.z, styles.zPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
          </View>
          <View style={[styles.p, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>P</Text>
          </View>
          <View style={[styles.o, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
          </View>
          <View style={[styles.i, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
          </View>
          <View style={[styles.u, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
          </View>
          <View style={[styles.y, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Y</Text>
          </View>
          <View style={[styles.t, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
          </View>
          <View style={[styles.r, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>R</Text>
          </View>
          <View style={[styles.e, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>E</Text>
          </View>
          <View style={[styles.w, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
          </View>
          <View style={[styles.q, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>Q</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.recentlySearched, styles.filterTypo]}>
        Recently Searched
      </Text>
      <View style={styles.clearAllWrapper}>
        <Text style={[styles.clearAll, styles.backTypo]}>CLEAR ALL</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.groupSpaceBlock]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame14.png")}
          />
          <View style={styles.frameContainer}>
            <View style={styles.bbqChickenBurgerWrapper}>
              <Text
                style={[styles.bbqChickenBurger, styles.bbqChickenBurgerTypo]}
              >{`BBQ Chicken Burger `}</Text>
            </View>
            <View style={[styles.logoParent, styles.parentFlexBox]}>
              <ImageBackground
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../assets/logo1.png")}
              >
                <View style={styles.image1} />
              </ImageBackground>
              <Text style={styles.kfcTypo}>KFC</Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlinearsearchNormalIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={styles.frameView}>
        <View style={[styles.logoGroup, styles.groupSpaceBlock]}>
          <Image
            style={styles.logoIconLayout}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
          <View style={styles.kfcParent}>
            <Text
              style={[styles.bbqChickenBurger, styles.bbqChickenBurgerTypo]}
            >
              KFC
            </Text>
            <View
              style={[
                styles.bramleaRoadBramptonOnWrapper,
                styles.parentFlexBox,
              ]}
            >
              <Text style={[styles.bramleaRoadBrampton, styles.kfcTypo]}>
                10565 Bramlea Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlinearsearchNormalIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={styles.frameParent1}>
        <View style={[styles.logoGroup, styles.groupSpaceBlock]}>
          <View style={styles.logoIconLayout}>
            <View style={[styles.logoChild, styles.logoIconLayout]} />
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
          </View>
          <View style={styles.kfcParent}>
            <Text
              style={[styles.bbqChickenBurger, styles.bbqChickenBurgerTypo]}
            >
              McDonald’s
            </Text>
            <View
              style={[
                styles.bramleaRoadBramptonOnWrapper,
                styles.parentFlexBox,
              ]}
            >
              <Text style={[styles.bramleaRoadBrampton, styles.kfcTypo]}>
                18915 Queens Road, Brampton, ON
              </Text>
            </View>
          </View>
          <Image
            style={styles.vuesaxlinearsearchNormalIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowright1.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
      </View>
      <View style={[styles.vuesaxlinearsetting3Parent, styles.parentFlexBox]}>
        <Image
          style={styles.vuesaxlinearsearchNormalIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearsetting3.png")}
        />
        <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
      </View>
      <View style={[styles.searchChild, styles.childPosition]} />
      <Image
        style={[styles.vuesaxlineararrowLeftIcon, styles.logoIconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <View style={[styles.statusBar, styles.childPosition]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.parentFlexBox]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  backFlexBox: {
    textAlign: "left",
    color: Color.dark100,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  bbqChickenBurgerTypo: {
    lineHeight: 23,
    fontSize: FontSize.body_size,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.body,
  },
  viewPosition: {
    bottom: "21.25%",
    top: "62.53%",
    height: "16.22%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  labelTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.sFProText,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: "26.2%",
    left: 0,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.09%",
    top: "41.69%",
    width: "11.39%",
    height: "16.22%",
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -12.95,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.sFProText,
    position: "absolute",
  },
  mPosition: {
    width: "8.68%",
    bottom: "42.09%",
    top: "41.69%",
    height: "16.22%",
    position: "absolute",
  },
  nPosition: {
    left: "66.13%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.81%",
    right: "35.51%",
  },
  vPosition: {
    left: "45.81%",
    right: "45.52%",
  },
  cPosition: {
    left: "35.49%",
    right: "55.84%",
  },
  xPosition: {
    left: "25.48%",
    right: "65.84%",
  },
  zPosition: {
    left: "15.16%",
    right: "76.16%",
  },
  lPosition: {
    bottom: "62.93%",
    top: "20.84%",
    width: "8.68%",
    height: "16.22%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.78%",
    width: "8.68%",
    top: "0%",
    height: "16.22%",
    position: "absolute",
  },
  filterTypo: {
    fontWeight: "500",
    textAlign: "left",
  },
  backTypo: {
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.body,
  },
  groupSpaceBlock: {
    paddingBottom: Padding.p_lg,
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_2xl,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  kfcTypo: {
    color: Color.colorDarkslategray_100,
    lineHeight: 19,
    letterSpacing: -0.1,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.body,
  },
  logoIconLayout: {
    height: 36,
    width: 36,
  },
  childPosition: {
    top: 0,
    position: "absolute",
  },
  timeLightPosition: {
    left: 21,
    position: "absolute",
  },
  search1: {
    top: 104,
    fontSize: FontSize.heading4_size,
    letterSpacing: -1.8,
    lineHeight: 42,
    fontFamily: FontFamily.body,
    textAlign: "left",
    left: 21,
  },
  vuesaxlinearsearchNormalIcon: {
    height: 24,
    width: 24,
  },
  searchFoodRestaurants: {
    color: Color.dark60,
    flex: 1,
  },
  vuesaxlinearsearchNormalParent: {
    top: 161,
    borderRadius: Border.br_sm,
    backgroundColor: Color.light80,
    width: 347,
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_sm,
    gap: Gap.gap_2xl,
    left: 21,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    left: 1,
    height: 34,
    bottom: 0,
    right: -1,
    position: "absolute",
  },
  dictationIcon: {
    height: 26,
    width: 16,
  },
  emojiIcon: {
    width: 28,
    height: 28,
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs_6,
    maxHeight: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
  },
  label: {
    width: 92,
  },
  return: {
    width: "23.84%",
    right: "0.03%",
    left: "76.13%",
  },
  label1: {
    width: 189,
  },
  space: {
    width: "49.32%",
    right: "25.48%",
    left: "25.2%",
  },
  rectangleIcon2: {
    right: 1,
    borderRadius: Border.br_8xs_6,
    maxHeight: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  label2: {
    width: 90,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 44,
  },
  keyLight: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  deleteButtonIcon: {
    height: 18,
    width: 24,
  },
  delete: {
    left: "88.61%",
    right: "0%",
  },
  rectangleShadowBox: {
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  symbol: {
    left: "48.05%",
  },
  shiftIcon: {
    height: "39.18%",
    width: "44.85%",
    top: "28.93%",
    right: "27.46%",
    bottom: "31.89%",
    left: "27.69%",
    position: "absolute",
  },
  shift: {
    right: "88.61%",
    left: "0%",
  },
  symbol1: {
    left: "18.62%",
  },
  m: {
    right: "14.9%",
    left: "76.42%",
  },
  symbol2: {
    left: "24.92%",
  },
  n: {
    width: "8.68%",
    bottom: "42.09%",
    top: "41.69%",
    height: "16.22%",
    position: "absolute",
  },
  symbol3: {
    left: "28.23%",
  },
  b: {
    width: "8.68%",
    bottom: "42.09%",
    top: "41.69%",
    height: "16.22%",
    position: "absolute",
  },
  v: {
    width: "8.68%",
    bottom: "42.09%",
    top: "41.69%",
    height: "16.22%",
    position: "absolute",
  },
  c: {
    width: "8.68%",
    bottom: "42.09%",
    top: "41.69%",
    height: "16.22%",
    position: "absolute",
  },
  x: {
    width: "8.68%",
    bottom: "42.09%",
    top: "41.69%",
    height: "16.22%",
    position: "absolute",
  },
  z: {
    width: "8.68%",
    bottom: "42.09%",
    top: "41.69%",
    height: "16.22%",
    position: "absolute",
  },
  symbol8: {
    left: "31.23%",
  },
  l: {
    right: "4.87%",
    left: "86.45%",
  },
  k: {
    right: "15.19%",
    left: "76.13%",
  },
  j: {
    left: "66.13%",
    right: "25.2%",
  },
  h: {
    left: "55.81%",
    right: "35.51%",
  },
  g: {
    left: "45.81%",
    right: "45.52%",
  },
  f: {
    left: "35.49%",
    right: "55.84%",
  },
  d: {
    left: "25.48%",
    right: "65.84%",
  },
  s: {
    left: "15.16%",
    right: "76.16%",
  },
  a: {
    right: "86.16%",
    left: "5.16%",
  },
  p: {
    left: "91.32%",
    right: "0%",
  },
  symbol18: {
    left: "21.92%",
  },
  o: {
    right: "10.03%",
    left: "81.29%",
  },
  symbol19: {
    left: "40.54%",
  },
  i: {
    right: "20.32%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.97%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  r: {
    right: "60.97%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.32%",
  },
  symbol25: {
    left: "15.62%",
  },
  w: {
    right: "81.29%",
    left: "10.03%",
  },
  q: {
    right: "91.32%",
    left: "0%",
  },
  keys: {
    height: "89.01%",
    width: "98.41%",
    top: "2.76%",
    right: "0.79%",
    bottom: "8.22%",
    left: "0.79%",
    position: "absolute",
  },
  keyboard: {
    top: 540,
    backgroundColor: Color.colorLightgray,
    height: 304,
    left: 0,
    right: -1,
    position: "absolute",
  },
  recentlySearched: {
    top: 233,
    fontSize: FontSize.subtitle2_size,
    lineHeight: 24,
    letterSpacing: -0.2,
    fontWeight: "500",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    left: 21,
    position: "absolute",
  },
  clearAll: {
    fontSize: FontSize.caption_size,
    letterSpacing: 0.2,
    color: Color.systemRed100,
    textAlign: "right",
  },
  clearAllWrapper: {
    top: 228,
    left: 286,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  frameIcon: {
    width: 106,
    height: 49,
    overflow: "hidden",
  },
  bbqChickenBurger: {
    alignSelf: "stretch",
    color: Color.dark100,
    fontSize: FontSize.body_size,
  },
  bbqChickenBurgerWrapper: {
    alignSelf: "stretch",
  },
  image1: {
    width: 9,
    height: 8,
  },
  logoIcon: {
    paddingHorizontal: 6,
    paddingVertical: 7,
    borderRadius: Border.br_31xl,
  },
  logoParent: {
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  frameContainer: {
    gap: 3,
    alignSelf: "stretch",
    flex: 1,
  },
  frameGroup: {
    gap: Gap.gap_xl,
  },
  frameChild: {
    alignSelf: "stretch",
    width: "100%",
  },
  frameParent: {
    top: 275,
    right: 0,
    left: 0,
    position: "absolute",
  },
  bramleaRoadBrampton: {
    flex: 1,
  },
  bramleaRoadBramptonOnWrapper: {
    alignSelf: "stretch",
  },
  kfcParent: {
    gap: Gap.gap_3xs,
    flex: 1,
  },
  logoGroup: {
    gap: Gap.gap_2xl,
  },
  frameView: {
    top: 366,
    right: 0,
    left: 0,
    position: "absolute",
  },
  logoChild: {
    backgroundColor: Color.colorFirebrick,
    borderRadius: Border.br_31xl,
    top: 0,
    position: "absolute",
    left: 0,
  },
  image1Icon: {
    top: 11,
    left: 10,
    height: 14,
    width: 16,
    position: "absolute",
  },
  frameParent1: {
    top: 451,
    right: 0,
    left: 0,
    position: "absolute",
  },
  filter: {
    fontSize: FontSize.button_size,
    lineHeight: 18,
    fontFamily: FontFamily.button,
    color: Color.pink100,
  },
  vuesaxlinearsetting3Parent: {
    top: 103,
    left: 274,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorPink,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    gap: 6,
    position: "absolute",
  },
  searchChild: {
    backgroundColor: Color.colorGray_300,
    width: 390,
    height: 93,
    left: 0,
  },
  vuesaxlineararrowLeftIcon: {
    top: 45,
    left: 21,
    position: "absolute",
  },
  back: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.dark100,
    position: "absolute",
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    height: 14,
    width: 16,
  },
  batteryLight: {
    width: 25,
    height: 14,
  },
  statusIcons: {
    top: 16,
    right: 14,
    gap: Gap.gap_xs,
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
    right: 7,
    left: 7,
    height: 44,
    overflow: "hidden",
  },
  search: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Search;
