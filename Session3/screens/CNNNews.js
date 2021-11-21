import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from "react-native";

const cnnNews = [
  {
    title: 'She died from a snakebite. But the real killer was her husband',
    content: '(CNN)Uthra\'s mother found her daughter lying motionless in bed at the family home, her left arm dotted with blood.\n' +
      '\n' +
      'Her family rushed her to the local Kollam hospital in the southern Indian state of Kerala, but the 25-year-old was already dead.\n' +
      'A post-mortem on May 7, 2020, confirmed she\'d been bitten hours earlier by a highly venomous Indian spectacled cobra, according to court documents.\n' +
      'In India, where snake bites are not uncommon, that could have been the end of it. But her family grew suspicious and filed a complaint with police.\n' +
      'After a trial that made national headlines, Uthra\'s killer was found guilty and sentenced to life in prison for crimes the sentencing judge called "diabolic and ghastly."\n' +
      'The judge found Uthra\'s death was caused by the cobra -- but the real killer was her husband.',
    url: 'https://edition.cnn.com/2021/11/20/india/india-snake-cobra-murder-intl-hnk-dst/index.html',
  },
  {
    title: 'The victims of the Belarus border crisis were obvious. For Poland\'s government, it was a useful distraction',
    content: '(CNN)It was clear who the losers were in the dispute between Poland and Belarus. The thousands of migrants who became stranded on the border in freezing conditions had their dreams of a new future in Europe dashed, and some are now being repatriated to their home countries. But for Poland\'s government, the crisis helped to divert attention from a series of uncomfortable issues.\n' +
      '\n' +
      'The nationalist Law and Justice party (PiS), which won an outright majority in 2015, has seen its grip on parliamentary power weaken in the years since. It is also roiled in conflict with the European Commission over the rule of law and faces wide opposition, especially in urban areas, to its position on cultural issues.',
    url: 'https://edition.cnn.com/2021/11/21/europe/poland-border-crisis-politics-intl-cmd/index.html',
  },
  {
    title: 'Asia\'s quiet militarization threatens to turn the region into a powder keg',
    content: 'Hong Kong (CNN)In Shanghai\'s sprawling Jiangnan Shipyard, workers are fitting the catapults that will separate China\'s latest and most advanced aircraft carrier from its two older sister ships.\n' +
      '\n' +
      'Once launched, the high-tech vessel will be able to propel planes into the sky at the same speed as its US counterparts, another example of China\'s rapid military modernization.\n' +
      'It\'s a trend that is putting the entire region on edge.\n' +
      'In recent months, global attention has been fixed on rising tensions between Taipei and Beijing -- but the threat of conflict in Asia stretches far beyond the Taiwan Strait.\n' +
      'Across the region, countries are engaged in their own quiet arms race to avoid being left behind. But experts warn that any miscalculation could lead to conflict in a region already riven by border disputes and old rivalries.',
    url: 'https://edition.cnn.com/2021/11/19/asia/china-taiwan-asia-us-militarization-intl-dst-hnk-ml/index.html'
  }
]

export const CNNNews = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return (
    loading ? <ActivityIndicator size="large"/> :
      <View style={styles.container}>
        {cnnNews.map(stire =>
          <Button onPress={() => navigation.navigate('News', stire)}
                  title={stire.title}
                  style={{margin: 20, fontSize: 24}}/>)}
      </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
