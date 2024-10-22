import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import {
  Color,
  FontSize,
  FontFamily,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={[styles.signUpOr, styles.signTypo]}>
        Sign up or Login to your Account
      </Text>
      <View style={styles.frameParent}>
        <View style={[styles.loginWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </View>
        <View style={[styles.signUpWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.signUp1, styles.loginTypo]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[styles.enterYourNameWrapper, styles.enterWrapperSpaceBlock]}
      >
        <Text style={[styles.enterYourName, styles.textTypo]}>
          Enter your Name
        </Text>
      </View>
      <View style={[styles.countryCodeParent, styles.enterWrapperSpaceBlock]}>
        <View style={styles.countryCodeFlexBox}>
          <Text style={styles.textTypo}>+1</Text>
          <Image
            style={styles.vuesaxlineararrowDownIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowdown.png")}
          />
        </View>
        <Image
          style={[styles.seperatorIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/seperator.png")}
        />
        <Text style={styles.textTypo}>000 000 0000</Text>
      </View>
      <Text style={[styles.fullName, styles.fullNameTypo]}>Full Name</Text>
      <Text style={[styles.phoneNumber, styles.fullNameTypo]}>
        Phone Number
      </Text>
      <Image
        style={[styles.signUpChild, styles.signPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-769.png")}
      />
      <Image
        style={[styles.signUpItem, styles.signPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-770.png")}
      />
      <Image
        style={[styles.signUpInner, styles.signPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-769.png")}
      />
      <View style={styles.orSignUpUsingParent}>
        <Text style={styles.signTypo}>Or Sign Up Using:</Text>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-41.png")}
        />
      </View>
      <Image
        style={[styles.googleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/google.png")}
      />
      <Image
        style={[styles.appleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/apple.png")}
      />
      <Image
        style={[styles.layerX00201Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/layer-x0020-1.png")}
      />
      <View
        style={[styles.enterYourPasswordWrapper, styles.enterWrapperSpaceBlock]}
      >
        <Text style={[styles.enterYourName, styles.textTypo]}>
          Enter your Password
        </Text>
      </View>
      <Text style={[styles.createPassword, styles.fullNameTypo]}>
        Create Password
      </Text>
      <FrameComponent2
        next="Next"
        vuesaxlineararrowRight={require("../assets/vuesaxlineararrowright3.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Image
          style={[styles.notchIcon, styles.basePosition1]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.countryCodeFlexBox]}>
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
      <View style={[styles.homeIndicator, styles.basePosition]}>
        <View style={styles.bar}>
          <View style={[styles.base, styles.basePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signTypo: {
    color: Color.dark80,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.body,
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_71xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loginTypo: {
    textAlign: "center",
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.body,
  },
  enterWrapperSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_smi,
    backgroundColor: Color.light80,
    borderRadius: Border.br_sm,
    width: 348,
    alignItems: "center",
    flexDirection: "row",
    left: 21,
    position: "absolute",
  },
  textTypo: {
    color: Color.dark60,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.body,
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  fullNameTypo: {
    width: 170,
    left: 34,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  signPosition: {
    height: 71,
    top: 605,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusBarPosition: {
    left: 7,
    right: 8,
    overflow: "hidden",
  },
  basePosition1: {
    left: 0,
    right: 0,
    top: 0,
  },
  countryCodeFlexBox: {
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  basePosition: {
    bottom: 0,
    position: "absolute",
  },
  welcome: {
    top: 50,
    fontSize: FontSize.heading4_size,
    letterSpacing: -0.7,
    lineHeight: 46,
    fontWeight: "500",
    textAlign: "left",
    color: Color.dark100,
    fontFamily: FontFamily.body,
    left: 21,
    position: "absolute",
  },
  signUpOr: {
    top: 93,
    width: 246,
    left: 21,
    position: "absolute",
  },
  login: {
    color: Color.pink100,
  },
  loginWrapper: {
    flex: 1,
  },
  signUp1: {
    color: Color.light100,
  },
  signUpWrapper: {
    backgroundColor: Color.pink100,
    width: 177,
  },
  frameParent: {
    top: 137,
    left: 16,
    borderRadius: Border.br_211xl,
    backgroundColor: Color.colorPink,
    width: 358,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_smi,
    paddingBottom: Padding.p_3xs,
    gap: Gap.gap_2xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  enterYourName: {
    flex: 1,
  },
  enterYourNameWrapper: {
    top: 253,
  },
  vuesaxlineararrowDownIcon: {
    width: 22,
    height: 22,
  },
  seperatorIcon: {
    height: 24,
  },
  countryCodeParent: {
    top: 359,
    gap: Gap.gap_2xl,
  },
  fullName: {
    top: 224,
  },
  phoneNumber: {
    top: 330,
  },
  signUpChild: {
    width: 71,
    height: 71,
    top: 605,
    left: 21,
  },
  signUpItem: {
    left: 112,
    width: 70,
    height: 71,
    top: 605,
  },
  signUpInner: {
    left: 202,
    width: 71,
    height: 71,
    top: 605,
  },
  frameChild: {
    flex: 1,
  },
  orSignUpUsingParent: {
    top: 554,
    gap: Gap.gap_3xl,
    width: 348,
    alignItems: "center",
    flexDirection: "row",
    left: 21,
    position: "absolute",
  },
  googleIcon: {
    height: "3.7%",
    width: "7.82%",
    top: "74.05%",
    right: "81.67%",
    bottom: "22.25%",
    left: "10.51%",
    position: "absolute",
  },
  appleIcon: {
    height: "4.35%",
    width: "7.64%",
    top: "73.5%",
    right: "58.59%",
    bottom: "22.16%",
    left: "33.77%",
    position: "absolute",
  },
  layerX00201Icon: {
    height: "4.3%",
    width: "9.31%",
    top: "73.72%",
    right: "34.41%",
    bottom: "21.98%",
    left: "56.28%",
    position: "absolute",
  },
  enterYourPasswordWrapper: {
    top: 466,
  },
  createPassword: {
    top: 437,
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
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
    left: 7,
    right: 8,
    position: "absolute",
  },
  base: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.labelColorLightPrimary,
    left: 0,
    right: 0,
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
  signUp: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default SignUp;
