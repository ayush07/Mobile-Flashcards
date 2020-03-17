import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { white, bgPink } from '../utils/colors';
import { robotoMedium, robotoRegular } from '../utils/fonts';

export default function HomeHeader() {

  return (
    <View style={styles.headerPanel}>



      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Mobile Flashcards</Text>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerPanel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    height: 130,
    borderRadius: 10,
    backgroundColor: bgPink
  },
  headerTextContainer: {
    flexDirection: 'column' // Swap from row back to the default of column
  },
  headerText: {
    textAlign: 'center',
    color: white,
    fontFamily: robotoMedium,
    fontSize: 32
  },
  headerTagline: {
    textAlign: 'center',
    marginTop: 10,
    color: white,
    fontFamily: robotoRegular,
    fontSize: 13
  }
});
