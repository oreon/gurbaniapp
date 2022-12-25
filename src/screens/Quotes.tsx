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
import { QUOTES } from "../store/quotes";

export default function QuotesScreen({ route, navigation }) {
  const { data } = route.params;
  console.log(data);

  let mc = "Quotes for " + data;
  let qt = QTS.filter((x) => x.title === data)[0];

  const findqt = (id: string) => {
    const x = QUOTES.filter((x) => {
      console.log("🚀 ~ file: Quotes.tsx:23 ~ findqt ~ x", x);
      return x.id === id;
    });
    if (!x) return "No quotes found";
    return x[0];
  };

  let texts = qt ? qt.texts : [["--"]];

  return (
    <ScrollView>
      <Layout>
        {/* <TopNav middleContent={mc} /> */}

        {texts.map((text) => {
          const tx = findqt(text);
          if (!tx) return <Text size="xl">No quotes found !</Text>;
          return (
            <Section>
              <SectionContent>
                {tx?.text.map((q) => (
                  <Text size="xl">{q}</Text>
                ))}
                <Text size="md">Ang:{tx?.ang}</Text>
                <Text size="md">
                  ____________________________________________
                </Text>
              </SectionContent>
            </Section>
          );
        })}
      </Layout>
    </ScrollView>
  );
}
