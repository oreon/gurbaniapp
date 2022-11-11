import React from "react";
import {
  Layout,
  Section,
  SectionContent,
  TopNav,
  Button,
  Text,
} from "react-native-rapi-ui";
import { QTS } from "../store/data";

export default function QuotesScreen({ route, navigation }) {
  const { data } = route.params;
  console.log(data);

  let mc = "Quotes for " + data;

  let qt = QTS.filter((x) => x.title === data)[0];

  let texts = qt ? qt.texts : [["No quotes found"]];

  return (
    <Layout>
      {/* <TopNav middleContent={mc} /> */}

      {texts.map((text) => (
        <Section>
          <SectionContent>
            <Text size="h2">{text[0]}</Text>
            <Text size="xl">{text[1]}</Text>
            <Text size="h3">{text[2]}</Text>
          </SectionContent>
        </Section>
      ))}
    </Layout>
  );
}
