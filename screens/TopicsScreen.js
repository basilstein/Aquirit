import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function TopicsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TopicSection
        width="32px"
        icon="ios-chatboxes"
        text="Introduction"
        isLastTopicSection
      />
    </ScrollView>
  );
}

function TopicSection({ icon, text, isLastTopicSection }) {
  return (
    <RectButton id="Rectangle" style={[styles.TopicSection, isLastTopicSection && styles.lastTopicSection]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.TopicSectionContainer}>
          <Ionicons name={icon} size={32} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.TopicSectionTextContainer}>
          <Text style={styles.TopicSectionText}>{text}</Text>
        </View>
      </View>
    </RectButton>
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
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastTopicSection: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  TopicSectionText: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
