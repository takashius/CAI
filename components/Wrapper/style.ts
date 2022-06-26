import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 40,
  },
  title: {
    paddingHorizontal: 40
  },
  titleText: {
    fontSize: 40,
    color: "#522289",
    fontFamily: "RobotoBold",
  },
  subTitle: {
    fontSize: 15,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 22,
    fontFamily: "RobotoRegular",
    color: "#a2a2db",
  },
  content: {
    backgroundColor: "#FFF",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    marginLeft:15,
    marginRight:15,
    marginBottom:50,
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#D9DAFC",
  },
  drawerParagraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
})

export default styles;