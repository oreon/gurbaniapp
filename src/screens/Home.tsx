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
    //check if the string contains a blank line
    if (emotion === "") {
      return;
    }
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
            <Text size="h3"> Manda kis nu akhiye ja tis bin duja nahi ||</Text>
            <Text size="md">
              {" "}
              Whom can I call bad if there is none other than you !
            </Text>
            <Button text="Anger" onPress={() => nav("anger")} />

            <Button
              text="Feeling offended becuase of rude behaviour/ words"
              onPress={() => nav("anger-rude-words")}
            />

            <Button
              text="A friend turned down your request for help"
              onPress={() => nav("anger-turned-down-help")}
            />

            <Button text="Jealousy" onPress={() => nav("jealousy")} />
            <Button text="Hate" onPress={() => nav("hate")} />
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <Text size="h2"> Anxiety (Worry / Chinta) </Text>
            <Text size="h3"> Na kar chint chinta hai karte ||</Text>
            <Text size="md">
              {" "}
              Do not worry , the creator worries for all your needs !
            </Text>
            <Button
              text="Too much thinking about future "
              onPress={() => nav("future-thinking")}
            />

            <Button
              text="Worrying about finances"
              onPress={() => nav("finance-worry")}
            />

            <Button
              text="Worrying someone might not retrun money they borrowed"
              onPress={() => nav("future")}
            />

            <Button
              text="Worrying about health"
              onPress={() => nav("future")}
            />

            <Button
              text="Worrying about loved ones"
              onPress={() => nav("future")}
            />
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <Text size="h2"> Craving for sense pleasures </Text>
            <Text size="h3"> Jete ras sareer ke te tete lage dukh ||</Text>
            <Text size="md">
              {" "}
              The more one indulges in sense pleasures , the more suffering one
              creates for oneself !
            </Text>
            <Button
              text="Lust / Sexual thoughts "
              onPress={() => nav("lust")}
            />

            <Button
              text="Indulgence in Food and drink"
              onPress={() => nav("food")}
            />

            <Button
              text="Electronics usage (tv/phone etc)"
              onPress={() => nav("electronics")}
            />

            <Button
              text="Gossip/ useless chatter"
              onPress={() => nav("chatter")}
            />

            <Button
              text="Romantic infatuation with a man or woman"
              onPress={() => nav("future")}
            />
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <Text size="h2"> Laziness for naam simran </Text>
            <Text size="h3"> Janam birtha jaat rang maya ke ||</Text>
            <Text size="md">
              {" "}
              The life is going wasted without simran , lost in allure of
              illusory maya !
            </Text>
            <Button
              text="Laziness for Waheguru chanting"
              onPress={() => nav("laziness")}
            />

            <Button
              text="Laziness for waking up early for simran"
              onPress={() => nav("amrit-vela")}
            />

            <Button
              text="Forgetting waheguru during mundane activities like eating, bathing, walking"
              onPress={() => nav("simran-all-day")}
            />
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <Text size="h2"> Others </Text>
            <Text size="h3">
              {" "}
              Kahat kabeer sayi jan bhoole khasam visaar mati sang rule ||
            </Text>
            <Text size="md">
              {" "}
              Says Kabeer those are lost who forget waheguru for the love of
              maya
            </Text>
            <Button
              text="Bereavement over loved ones who died"
              onPress={() => nav("future")}
            />

            <Button
              text="Regret over material losses"
              onPress={() => nav("regret-material")}
            />

            <Button
              text="Projects / Investments to earn money"
              onPress={() => nav("future")}
            />
            <Text>;</Text>
            <Button
              text="Desire for likes from Social media "
              onPress={() => nav("future")}
            />

            <Button
              text="Craving for recognition/praise from others"
              onPress={() => nav("future")}
            />

            <Button
              text="Too much thinking at the expense of present moment"
              onPress={() => nav("future")}
            />
          </SectionContent>
        </Section>
      </Layout>
    </ScrollView>
  );
}
