import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function TopicsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TopicSection
        icon="ios-chatboxes"
        text="Introduction"
      />

    </ScrollView>
  );
}
function Topic(onclick, text) {
  return (
    <RectButton onclick = {onclick}>
      <View style={styles.TopicSection}>
        <Text></Text>
      </View>
    </RectButton>
  );
}
function TopicSection({icon, text, topics}) {
  return (
    <View style={styles.TopicSection}>
      <View style={styles.TopicSectionContainer && {flexDirection: 'row'}}>
        <Ionicons name={icon} size={32} color="rgba(0,0,0,0.35)" />
        <Text style={styles.TopicSectionText}>{" " + text}</Text>
      </View>
      <View style={styles.TopicSectionTextContainer}>
      </View>
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
});
