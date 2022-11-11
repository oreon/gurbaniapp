import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { ThemeProvider } from "react-native-rapi-ui";
import Navigation from "./src/navigation/Navigator";

import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <ThemeProvider theme="light">
      <Navigation />
    </ThemeProvider>
  );
};

export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Which emotion are you feeling currently</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
