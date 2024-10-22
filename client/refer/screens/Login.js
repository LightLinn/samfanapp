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

const Login = () => {
  return (
    <View style={styles.login}>
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={[styles.signUpOr, styles.signUpOrTypo]}>
        Sign up or Login to your Account
      </Text>
      <View style={styles.frameParent}>
        <View style={[styles.loginWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </View>
        <View style={[styles.signUpWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.signUp, styles.login1Typo]}>Sign Up</Text>
        </View>
      </View>
      <View
        style={[styles.enterYourEmailWrapper, styles.enterWrapperSpaceBlock]}
      >
        <Text style={styles.enterYourEmail}>Enter your Email</Text>
      </View>
      <View
        style={[styles.enterYourPasswordWrapper, styles.enterWrapperSpaceBlock]}
      >
        <Text style={styles.enterYourEmail}>Enter your Password</Text>
      </View>
      <Text style={[styles.emailAddress, styles.passwordTypo]}>
        Email Address
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.forgotPassword, styles.signUpOrTypo]}>
        Forgot Password?
      </Text>
      <Image
        style={[styles.loginChild, styles.loginPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-769.png")}
      />
      <Image
        style={[styles.loginItem, styles.loginPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-770.png")}
      />
      <Image
        style={[styles.loginInner, styles.loginPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-769.png")}
      />
      <View style={styles.orLoginUsingParent}>
        <Text style={[styles.orLoginUsing, styles.signUpOrTypo]}>
          Or Login Using:
        </Text>
        <Image
          style={[styles.frameChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector-42.png")}
        />
      </View>
      <Image
        style={[styles.googleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/google1.png")}
      />
      <Image
        style={[styles.appleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/apple1.png")}
      />
      <Image
        style={[styles.layerX00201Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/layer-x0020-1.png")}
      />
      <FrameComponent2
        next="Login"
        vuesaxlineararrowRight={require("../assets/vuesaxlineararrowright4.png")}
        propBottom={30}
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
  signUpOrTypo: {
    color: Color.dark80,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.body,
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_71xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  login1Typo: {
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
  passwordTypo: {
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
  loginPosition: {
    height: 71,
    top: 537,
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
    textAlign: "left",
    left: 21,
    position: "absolute",
  },
  login1: {
    color: Color.light100,
  },
  loginWrapper: {
    backgroundColor: Color.pink100,
    width: 151,
  },
  signUp: {
    color: Color.pink100,
  },
  signUpWrapper: {
    flex: 1,
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
  enterYourEmail: {
    color: Color.dark60,
    lineHeight: 23,
    letterSpacing: -0.2,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.body,
    flex: 1,
  },
  enterYourEmailWrapper: {
    top: 253,
  },
  enterYourPasswordWrapper: {
    top: 359,
  },
  emailAddress: {
    top: 224,
  },
  password: {
    top: 330,
  },
  forgotPassword: {
    top: 425,
    left: 232,
    textDecoration: "underline",
    textAlign: "right",
    position: "absolute",
  },
  loginChild: {
    width: 71,
    height: 71,
    top: 537,
    left: 21,
  },
  loginItem: {
    left: 112,
    width: 70,
    height: 71,
    top: 537,
  },
  loginInner: {
    left: 202,
    width: 71,
    height: 71,
    top: 537,
  },
  orLoginUsing: {
    textAlign: "left",
  },
  frameChild: {
    flex: 1,
  },
  orLoginUsingParent: {
    top: 486,
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
    top: "66%",
    right: "81.67%",
    bottom: "30.31%",
    left: "10.51%",
    position: "absolute",
  },
  appleIcon: {
    height: "4.35%",
    width: "7.64%",
    top: "65.44%",
    right: "58.59%",
    bottom: "30.21%",
    left: "33.77%",
    position: "absolute",
  },
  layerX00201Icon: {
    height: "4.3%",
    width: "9.31%",
    top: "65.66%",
    right: "34.41%",
    bottom: "30.04%",
    left: "56.28%",
    position: "absolute",
  },
  notchIcon: {
    height: 30,
    maxWidth: "100%",
    right: 0,
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
  login: {
    borderRadius: Border.br_27xl,
    backgroundColor: Color.light100,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default Login;
