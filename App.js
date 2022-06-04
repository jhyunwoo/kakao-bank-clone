import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.profile}>
        <View style={styles.pro_view}>
          <View style={styles.pro_view_text_1}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
              전현우
            </Text>
          </View>
          <View style={styles.pro_view_text_2}>
            <Text
              style={{ fontSize: 15, color: "white", marginHorizontal: 10 }}
            >
              내 계좌
            </Text>
          </View>
        </View>
        <View style={styles.pro_img}>
          <Text>H</Text>
        </View>
      </View>
      <View style={styles.bank_acc}></View>
      <View style={styles.und_bar}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgb(52, 59, 87)",
  },
  profile: {
    flex: 1.4,
    backgroundColor: "tomato",
    justifyContent: "space-between",
  },
  bank_acc: {
    flex: 12,
    backgroundColor: "teal",
  },
  und_bar: {
    flex: 0.8,
    backgroundColor: "orange",
  },
  pro_view: {
    backgroundColor: "teal",
    marginTop: 15,
    flexDirection: "row",
  },
  pro_view_text_1: {
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 23,
    fontWeight: "bold",
    padding: 5,
  },
  pro_view_text_2: {
    color: "white",
    fontSize: 15,
    backgroundColor: "rgb(43,47,69)",
    borderRadius: 15,
    padding: 5,
    margin: 10,
  },
  pro_img: {
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
});
