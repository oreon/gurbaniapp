import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  Layout,
  Section,
  SectionContent,
  TopNav,
  Button,
  Text,
} from "react-native-rapi-ui";
import QuotesScreen from "./Quotes";

export default function HomeScreen({ navigation }) {
  function nav(emotion) {
    navigation.push("Quotes", {
      data: emotion,
    });
  }

  return (
    <Layout>
      <TopNav middleContent="Which emotion are you feeling currently !" />
      <Section>
        <SectionContent>
          <Text size="h2"> Animosity</Text>
          <Button text="Anger" onPress={() => nav("anger")} />;
          <Button text="Jealousy" onPress={() => nav("jealousy")} />;
          <Button text="Hate" onPress={() => nav("hate")} />;
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <Text size="h2"> Others</Text>
          <Button
            text="Too much about future "
            onPress={() => console.log("Button tapped")}
          />
          ;
          <Button
            text="Worry about finances"
            onPress={() => console.log("Button tapped")}
          />
          ;
          <Button text="Lust" onPress={() => console.log("Button tapped")} />;
          <Button text="Pride" onPress={() => console.log("Button tapped")} />;
        </SectionContent>
      </Section>
    </Layout>
  );
}
