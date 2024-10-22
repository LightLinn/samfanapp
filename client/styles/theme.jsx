const COLORS = {
    primary: "#8FD5C5",      // 主色，柔和的淺青綠色（用於背景或主要界面）
    secondary: "#6FBBAE",    // 次色，稍深的青綠色（用於次要的元素或背景）

    gray: "#333",         // 灰色，常規文字或圖標
    gray2: "#999",        // 較淺的灰色，背景或次要分隔線
    gray3: "#aaa",        // 更淺的灰色，背景或次要分隔線

    white: "#FFFFFF",
    lightWhite: "#F7F7F7",        // 純白色，背景或主要文字
    bg: "#F2F2F2",           // 整體背景色，淺灰白色

    warning: "#FFA500",     // 警告色，橙色，用於警告信息
    info: "#00BFFF",         // 信息色，淺藍色，用於信息提示
    danger: "#FF0000",       // 危險色，紅色，用於危險操作
  };

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  letterSpacing: 1,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  xxxLarge: 40,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
