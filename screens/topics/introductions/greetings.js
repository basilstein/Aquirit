import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {RectButton, ScrollView } from 'react-native-gesture-handler';

export default function Greetings() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text>This is the greetings lesson</Text>
    </ScrollView>
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
