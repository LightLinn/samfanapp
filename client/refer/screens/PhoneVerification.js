import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import { Border, Color, FontFamily, FontSize, Gap } from "../GlobalStyles";

const PhoneVerification = () => {
  return (
    <View style={styles.phoneVerification}>
      <View style={[styles.wrapper, styles.wrapperFlexBox]}>
        <Text style={styles.text}>+1 169 916 9564</Text>
      </View>
      <View style={styles.vuesaxboldedit2Wrapper}>
        <Image
          style={styles.vuesaxboldedit2Icon}
          contentFit="cover"
          source={require("../assets/vuesaxboldedit2.png")}
        />
      </View>
      <View style={[styles.phoneVerificationChild, styles.phoneChildLayout]} />
      <View style={[styles.phoneVerificationItem, styles.phoneLayout]} />
      <View style={[styles.phoneVerificationInner, styles.phoneChildLayout]} />
      <View style={[styles.rectangleView, styles.phoneChildLayout]} />
      <View style={[styles.phoneVerificationChild1, styles.phoneLayout]} />
      <View style={[styles.phoneVerificationChild2, styles.phoneChildLayout]} />
      <Text
        style={[
          styles.didntReceiveCodeContainer,
          styles.homeIndicator1Position,
        ]}
      >
        <Text style={styles.didntReceiveCode}>{`Didn’t Receive Code? `}</Text>
        <Text style={styles.getANew}>Get a New one</Text>
      </Text>
      <View style={[styles.keyboard, styles.keyboardLayout]}>
        <View style={styles.homeIndicator}>
          <View
            style={[styles.homeIndicator1, styles.homeIndicator1Position]}
          />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.deleteIcon}
            contentFit="cover"
            source={require("../assets/delete.png")}
          />
          <View style={[styles.view, styles.viewPosition5]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background.png")}
            />
            <Text style={[styles.number, styles.numberTypo]}>0</Text>
          </View>
          <View style={[styles.view1, styles.viewPosition3]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background1.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>WXYZ</Text>
            <Text style={[styles.number1, styles.numberTypo]}>9</Text>
          </View>
          <View style={[styles.view2, styles.viewPosition4]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background2.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>TUV</Text>
            <Text style={[styles.number1, styles.numberTypo]}>8</Text>
          </View>
          <View style={[styles.view3, styles.viewPosition2]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background3.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>PQRS</Text>
            <Text style={[styles.number1, styles.numberTypo]}>7</Text>
          </View>
          <View style={[styles.view4, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background4.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>MNO</Text>
            <Text style={[styles.number1, styles.numberTypo]}>6</Text>
          </View>
          <View style={[styles.view5, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background5.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>JKL</Text>
            <Text style={[styles.number1, styles.numberTypo]}>5</Text>
          </View>
          <View style={[styles.view6, styles.viewPosition1]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background6.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>GHI</Text>
            <Text style={[styles.number1, styles.numberTypo]}>4</Text>
          </View>
          <View style={[styles.view7, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background7.png")}
            />
            <Text style={[styles.label6, styles.labelTypo]}>DEF</Text>
            <Text style={[styles.number7, styles.numberTypo]}>3</Text>
          </View>
          <View style={[styles.view8, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background8.png")}
            />
            <Text style={[styles.label6, styles.labelTypo]}>ABC</Text>
            <Text style={[styles.number7, styles.numberTypo]}>2</Text>
          </View>
          <View style={[styles.view9, styles.viewPosition]}>
            <Image
              style={[styles.keyBackgroundIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/key-background9.png")}
            />
            <Text style={[styles.label6, styles.labelTypo]}>{` `}</Text>
            <Text style={[styles.number7, styles.numberTypo]}>1</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.verifyPhoneNumber, styles.backTypo]}>
        Verify Phone Number
      </Text>
      <Text style={[styles.weHaveSent, styles.backTypo]}>
        We have sent you a 6 digit code. Please enter here to Verify your
        Number.
      </Text>
      <FrameComponent2
        next="Verify and Continue"
        vuesaxlineararrowRight={require("../assets/vuesaxlineartickcircle.png")}
        propBottom={316}
      />
      <View
        style={[styles.phoneVerificationChild3, styles.statusBarPosition]}
      />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.statusBarPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.wrapperFlexBox]}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={styles.wifiSignalLight}
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  phoneChildLayout: {
    height: 58,
    width: 49,
    borderRadius: Border.br_sm,
    top: 308,
    backgroundColor: Color.light80,
    position: "absolute",
  },
  phoneLayout: {
    width: 48,
    height: 58,
    borderRadius: Border.br_sm,
    top: 308,
    backgroundColor: Color.light80,
    position: "absolute",
  },
  homeIndicator1Position: {
    left: "50%",
    position: "absolute",
  },
  keyboardLayout: {
    width: 390,
    left: 0,
  },
  viewPosition5: {
    left: "33.88%",
    right: "33.88%",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  numberTypo: {
    width: 122,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.sFProDisplay,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  viewPosition3: {
    left: "67.76%",
    right: "0%",
  },
  labelTypo: {
    fontFamily: FontFamily.sFProText,
    fontWeight: "700",
    letterSpacing: 2,
    fontSize: FontSize.size_3xs,
    width: 122,
    color: Color.labelColorLightPrimary,
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  viewPosition4: {
    bottom: "25.61%",
    top: "51.69%",
    height: "22.69%",
    width: "32.24%",
    position: "absolute",
  },
  viewPosition2: {
    right: "67.76%",
    left: "0%",
  },
  viewPosition1: {
    bottom: "51.69%",
    top: "25.61%",
    height: "22.69%",
    width: "32.24%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "77.77%",
    top: "0%",
    width: "32.24%",
    height: "22.23%",
    position: "absolute",
  },
  backTypo: {
    textAlign: "left",
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  statusBarPosition: {
    top: 0,
    position: "absolute",
  },
  text: {
    color: Color.dark90,
    textAlign: "center",
    fontFamily: FontFamily.body,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    flex: 1,
  },
  wrapper: {
    borderRadius: 70,
    width: 156,
    justifyContent: "center",
    padding: 8,
    backgroundColor: Color.light80,
    top: 225,
    alignItems: "center",
    left: 18,
  },
  vuesaxboldedit2Icon: {
    width: 17,
    height: 17,
  },
  vuesaxboldedit2Wrapper: {
    left: 184,
    borderRadius: 330,
    backgroundColor: Color.peach60,
    padding: 11,
    flexDirection: "row",
    top: 225,
    position: "absolute",
  },
  phoneVerificationChild: {
    left: 18,
    width: 49,
    borderRadius: Border.br_sm,
    top: 308,
  },
  phoneVerificationItem: {
    left: 79,
  },
  phoneVerificationInner: {
    left: 140,
  },
  rectangleView: {
    left: 201,
  },
  phoneVerificationChild1: {
    left: 263,
  },
  phoneVerificationChild2: {
    left: 323,
  },
  didntReceiveCode: {
    color: Color.dark80,
  },
  getANew: {
    textDecoration: "underline",
    color: Color.pink100,
  },
  didntReceiveCodeContainer: {
    marginLeft: -138,
    top: 416,
    textAlign: "right",
    fontFamily: FontFamily.body,
    left: "50%",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.labelColorLightPrimary,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    right: -1,
    bottom: 0,
    left: 1,
    height: 34,
    position: "absolute",
  },
  deleteIcon: {
    height: 19,
    width: 25,
  },
  keyBackgroundIcon: {
    height: "100%",
    borderRadius: Border.br_8xs,
    maxHeight: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  number: {
    top: "15.24%",
  },
  view: {
    top: "77.77%",
    bottom: "0%",
    width: "32.24%",
    height: "22.23%",
    left: "33.88%",
    right: "33.88%",
    position: "absolute",
  },
  label: {
    top: "63.19%",
  },
  number1: {
    top: "2.25%",
  },
  view1: {
    bottom: "25.61%",
    top: "51.69%",
    height: "22.69%",
    width: "32.24%",
    position: "absolute",
  },
  view2: {
    left: "33.88%",
    right: "33.88%",
  },
  view3: {
    bottom: "25.61%",
    top: "51.69%",
    height: "22.69%",
    width: "32.24%",
    position: "absolute",
  },
  view4: {
    left: "67.76%",
    right: "0%",
  },
  view5: {
    left: "33.88%",
    right: "33.88%",
  },
  view6: {
    right: "67.76%",
    left: "0%",
  },
  label6: {
    top: "63.05%",
  },
  number7: {
    top: "2.09%",
  },
  view7: {
    left: "67.76%",
    right: "0%",
  },
  view8: {
    left: "33.88%",
    right: "33.88%",
  },
  view9: {
    right: "67.76%",
    left: "0%",
  },
  keys: {
    height: "71.12%",
    width: "96.79%",
    top: "2.05%",
    right: "1.62%",
    bottom: "26.83%",
    left: "1.59%",
    position: "absolute",
  },
  keyboard: {
    top: 541,
    backgroundColor: Color.colorLightgray,
    height: 303,
    position: "absolute",
  },
  verifyPhoneNumber: {
    top: 111,
    fontSize: FontSize.heading4_size,
    letterSpacing: -0.7,
    lineHeight: 46,
    color: Color.dark100,
    fontWeight: "500",
    textAlign: "left",
    left: 21,
  },
  weHaveSent: {
    top: 165,
    width: 317,
    left: 21,
    color: Color.dark80,
    textAlign: "left",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
  },
  phoneVerificationChild3: {
    backgroundColor: Color.colorGray_300,
    height: 93,
    width: 390,
    left: 0,
  },
  vuesaxlineararrowLeftIcon: {
    top: 45,
    width: 36,
    height: 36,
    left: 21,
    position: "absolute",
  },
  back: {
    top: 56,
    left: 58,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.dark100,
    fontWeight: "500",
    textAlign: "left",
  },
  notchIcon: {
    right: 0,
    height: 30,
    maxWidth: "100%",
    overflow: "hidden",
    left: 0,
    top: 0,
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
    height: 14,
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    gap: Gap.gap_xs,
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
    right: 8,
    left: 7,
    height: 44,
    overflow: "hidden",
  },
  phoneVerification: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PhoneVerification;
