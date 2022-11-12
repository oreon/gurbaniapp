import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import QuotesScreen from "./Quotes";

export default function HomeScreen({ navigation }) {
  function nav(emotion) {
    navigation.push("Quotes", {
      data: emotion,
    });
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled" // http://t.cn/EowE3r3
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
    >
      <Layout>
        <TopNav middleContent="Which emotion are you feeling currently !" />
        <Section>
          <SectionContent>
            <Text size="h2"> Animosity</Text>
            <Button text="Anger" onPress={() => nav("anger")} />;
            <Button
              text="Feeling offended becuase of rude behaviour/ words"
              onPress={() => nav("anger-rude-words")}
            />
            ;
            <Button
              text="A friend turned down your request for help"
              onPress={() => nav("anger-turned-down-help")}
            />
            ;
            <Button text="Jealousy" onPress={() => nav("jealousy")} />;
            <Button text="Hate" onPress={() => nav("hate")} />;
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <Text size="h2"> Anxiety (Worry / Chinta) </Text>
            <Button
              text="Too much thinking about future "
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Worrying about finances"
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Worrying someone might not retrun money they borrowed"
              onPress={() => nav("future")}
            />
            <Button
              text="Worrying about health"
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Worrying about loved ones"
              onPress={() => nav("future")}
            />
            ;
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <Text size="h2"> Craving for sense pleasures </Text>
            <Button
              text="Lust / Sexual thoughts "
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Indulgence in Food and drink"
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Electronics usage (tv/phone etc)"
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Gossip/ useless chatter"
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Romantic infatuation with a man or woman"
              onPress={() => nav("future")}
            />
            ;
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <Text size="h2"> Others </Text>
            <Button
              text="Bereavement over loved ones who died"
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Projects / Investments to earn money"
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Desire for likes from Social media "
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Craving for recognition/praise from others"
              onPress={() => nav("future")}
            />
            ;
            <Button
              text="Too much thinking at the expense of present moment"
              onPress={() => nav("future")}
            />
            ;
          </SectionContent>
        </Section>
      </Layout>
    </ScrollView>
  );
}
