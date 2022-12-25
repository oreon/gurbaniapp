import React from "react";
import { ScrollView } from "react-native";
import {
  Layout,
  Section,
  SectionContent,
  TopNav,
  Button,
  Text,
} from "react-native-rapi-ui";

export default function DailyScreen() {
  return (
    <Section>
      <SectionContent>
        <Text size="h2">Til Til pal avadha ghatat boojhei nahi gavaar || </Text>
        <Text size="h2">
          {" "}
          Jit kitta payeia aapna sa ghal buri kyo ghaliye ||{" "}
        </Text>
        <Text size="h2"> Ja rehna nahi et jag ta kait garab handiye || </Text>
        <Text size="h2">
          {" "}
          Kaam na aave so kar kamaave, Aape beej aap hee khave ||{" "}
        </Text>
      </SectionContent>
    </Section>
  );
}
