import React, {useEffect, useState} from 'react';
import {Button, View, ActivityIndicator} from "react-native";

const cnnNews = [
  {
    headline: 'National Geographic reveals its top destinations for 2022',
    content: '(CNN) — While the pandemic is far from over, many of us are hopeful that 2022 is the year we\'ll finally be able to broaden our travel horizons again.\n' +
      'And now -- in as much a year-end tradition as Thanksgiving turkey or putting up the tree -- travel publishers are releasing their annual recommendations of where to travel in the year ahead.\n' +
      'Lonely Planet got in there at the start of November, bigging up Slovenia, Oman and Mauritius, and now it\'s the turn of venerable travel chronicler National Geographic, which has been educating us about our planet since 1888.\n' +
      'For its 2022 list, National Geographic\'s editorial teams around the world have selected 25 "must see" destinations. These are spread across five categories -- nature, adventure, culture, sustainability and family -- with a focus on national parks and wildlife, outdoor activities and experience, green travel and multigenerational trips.',
    url: 'https://edition.cnn.com/travel/article/national-geographic-best-of-the-world-2022/index.html',
  },
  {
    headline: '6 amazing Asia train journeys for food, scenery and culture',
    content: '(CNN) — The Covid-19 pandemic has derailed many family reunions, destination weddings and long-awaited trips. And while some would-be globetrotters miss the hyper pace of travel circa 2019, others plan to adjust their travel style completely.\n' +
      'According to the 2021 Global Travel Trends survey of 8,000 travelers worldwide by American Express, 68% expressed interest in more sustainable travel; 78% said they were looking for travel experiences that relieve stress; and 61% said they wanted slower, longer trips than in the past.\n' +
      'A train journey could be just the ticket for those who have their eyes on Asia for a 2022 trip.\n' +
      'From zig-zagging up the rugged mountains of central Taiwan to a Rajasthan rail journey fit for a maharaja, these scenic train routes showcase some of Asia\'s most beautiful landscapes and provide a much-needed opportunity to rest and reconnect with loved ones.',
    url: 'https://edition.cnn.com/travel/article/asia-best-train-journeys-cmd/index.html',
  },
  {
    headline: 'How the UK became the sick man of European tourism',
    content: '(CNN) — It\'s a country that has just endured national fuel shortages, isolated food shortages, and its government voted this fall to dump untreated sewage onto its famous coastlines. Oh -- and it has the second highest number of Covid-19 cases in the world.\n' +
      'So who would want to go on vacation in the UK at the moment?\n' +
      'Not many, the figures show.\n' +
      'For 2021, national tourist board Visit Britain has forecast that visitor numbers will be lower even than in 2020, when travel restrictions were at their highest.\n' +
      'Visitor numbers to the UK plummeted from 40.9 million in 2019 to 11.1 million in 2020 -- a dip of 73%.\n' +
      'But 2021 seems to have gone even worse for the UK\'s inbound tourism sector, with just 7.4 million visitors predicted to visit before the year is out -- down 82% on 2019.\n' +
      'And although all destinations, of course, have been devastated by the pandemic, the UK\'s figures show that travelers aren\'t bouncing back as they are in nearby countries, which have seen visitor numbers swell as they loosened restrictions.',
    url: 'https://edition.cnn.com/travel/article/uk-tourism-decline-restrictions-cmd/index.html',
  }
];

export const CNNNewsScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Used for loading effect, think of fetching from database or web scraping CNN
  useEffect(() => {
    setIsLoading(true);

    const action = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(action);
    }
  }, []);

  return <View style={{flex: 1, justifyContent: 'center'}}>
    {isLoading ? <ActivityIndicator size={'large'} color={'gray'}/> :
      cnnNews.map(news => <Button title={news.headline}
                                  onPress={() => navigation.navigate('News', news)}
                                  key={news.url}/>)}
  </View>
}
