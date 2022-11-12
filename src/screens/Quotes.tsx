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
import { QTS } from "../store/data";

export default function QuotesScreen({ route, navigation }) {
  const { data } = route.params;
  console.log(data);

  let mc = "Quotes for " + data;

  let qt = QTS.filter((x) => x.title === data)[0];

  let texts = qt ? qt.texts : [["No quotes found"]];

  return (
    <ScrollView>
      <Layout>
        {/* <TopNav middleContent={mc} /> */}

        {texts.map((text) => (
          <Section>
            <SectionContent>
              {text.map((q) => (
                <Text size="xl">{q}</Text>
              ))}
            </SectionContent>
          </Section>
        ))}
      </Layout>
    </ScrollView>
  );
}
