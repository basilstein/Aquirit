import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {RectButton, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Greetings from '../screens/topics/introductions/Greetings';

export default function TopicsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <IntroductionSection></IntroductionSection>
    </ScrollView>
  );
}

function IntroductionSection() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();
  <Stack.Screen
    name="Greetings"
    component={Greetings}
  />  
  return (
    <View style={styles.TopicSection}>
      <View style={styles.TopicSectionContainer && {flexDirection: 'row'}}>
        <Ionicons name="ios-chatboxes" size={32} color="rgba(0,0,0,0.35)" />
        <Text style={styles.TopicSectionText}> Introduction</Text>
      </View>
      <View style={styles.TopicSection}>
        <RectButton onPress={() => navigation.navigate('Greetings')}>
          <Text>Greetings</Text>
        </RectButton>
      </View>
    </View>
  );
}

/*function TopicSection({icon, text}) {
  return (
    <View style={styles.TopicSection}>
      <View style={styles.TopicSectionContainer && {flexDirection: 'row'}}>
        <Ionicons name={icon} size={32} color="rgba(0,0,0,0.35)" />
        <Text style={styles.TopicSectionText}>{" " + text}</Text>
      </View>
        {props.children}
    </View>
  );
}*/

function Topic(onclick, text) {
  return (
    <View style={styles.TopicSectionTextContainer}>
        <RectButton onclick = "insert">
          <Text>text</Text>
        </RectButton>
      </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  TopicSectionContainer: {
    marginRight: 12,
  },
  TopicSection: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#987dd4',
  },
  TopicSectionText: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  TopicText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
