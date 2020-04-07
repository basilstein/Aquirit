import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {RectButton, ScrollView } from 'react-native-gesture-handler';

export default function TopicsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <IntroductionSection></IntroductionSection>
    </ScrollView>
  );
}
function IntroductionSection() {
  return (
    <View style={styles.TopicSection}>
      <View style={styles.TopicSectionContainer && {flexDirection: 'row'}}>
        <Ionicons name="ios-chatboxes" size={32} color="rgba(0,0,0,0.35)" />
        <Text style={styles.TopicSectionText}> Introduction</Text>
      </View>
      <RectButton /*onPress={}*/>
        <View style={styles.TopicSection}>
          <Text>Greetings</Text>
        </View>
      </RectButton>
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
